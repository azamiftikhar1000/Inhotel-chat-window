import React, {useState} from 'react';
import {Box, Flex, Heading, Text, ThemeProvider} from 'theme-ui';
import {Presence} from 'phoenix';
import {motion} from 'framer-motion';
import {
  Papercups,
  isCustomerMessage,
  isAgentMessage,
} from '@papercups-io/browser';
import ChatMessage from './ChatMessage';
import ChatFooter from './ChatFooter';
import AgentAvailability from './AgentAvailability';
import PapercupsBranding from './PapercupsBranding';
import CloseIcon from './CloseIcon';
import {
  shorten,
  shouldActivateGameMode,
  setupPostMessageHandlers,
} from '../helpers/utils';
import {
  Message,
  CustomerMetadata,
  WidgetSettings,
  QuickReply,
} from '../helpers/types';
import Logger from '../helpers/logger';
import {
  isWindowHidden,
  addVisibilityEventListener,
} from '../helpers/visibility';
import analytics from '../helpers/analytics';
import EmbeddedGame from './EmbeddedGame';
import UnreadMessages from './UnreadMessages';
import QuickReplies from './QuickReplies';
import ContactForm from './ContactForm';
import {PulseLoader, SyncLoader} from 'react-spinners';
import ChatFooterEmail from './ChatFooterEmail';
// import Swal from 'sweetalert2';

type Props = {
  inboxId?: string;
  accountId: string;
  customerId?: string;
  title?: string;
  subtitle?: string;
  baseUrl?: string;
  greeting?: string;
  awayMessage?: string;
  newMessagePlaceholder?: string;
  emailInputPlaceholder?: string;
  newMessagesNotificationText?: string;
  shouldRequireEmail?: boolean;
  isMobile?: boolean;
  customer?: CustomerMetadata;
  companyName?: string;
  agentAvailableText?: string;
  agentUnavailableText?: string;
  showAgentAvailability?: boolean;
  disableAnalyticsTracking?: boolean;
  isCloseable?: boolean;
  debug?: boolean;
  version?: string;
  ts?: string;
  primaryColor?: string;
  position?: string;
  shouldShowContactForm?: boolean;
  hotelPhone?: string;
  hotelEmail?: string;
  avatarURL?: string;
};

type State = {
  messages: Array<Message>;
  customerId: string;
  conversationId: string | null;
  availableAgents: Array<any>;
  settings: WidgetSettings;
  isSending: boolean;
  isOpen: boolean;
  isTransitioning: boolean;
  isGameMode?: boolean;
  shouldDisplayNotifications: boolean;
  popUpInitialMessage?: boolean;
  shouldDisplayBranding: boolean;
  isMailIconClicked: boolean;
  isContactFormSubmitted: boolean;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  clickedSubmit: boolean;
  errors: {
    firstName: '';
    lastName: '';
    email: '';
    message: '';
  };
  isLoading: boolean;
  statusMessageCF: string;
  numberOfMessages: number;
  shouldSummarize: boolean;
  isSummarizeGenerated: boolean;
  shouldShowMessageLoading: boolean;
  avatarURL: string;
};

class ChatWindow extends React.Component<Props, State> {
  scrollToEl: any = null;
  subscriptions: Array<() => void> = [];
  logger: Logger;
  papercups: Papercups;

  constructor(props: Props) {
    super(props);

    const {debug: debugModeEnabled, disableAnalyticsTracking = false} = props;

    this.logger = new Logger(debugModeEnabled);

    if (!disableAnalyticsTracking) {
      this.logger.debug('Initializing analytics...');
      // Just initializes Sentry for error monitoring if available
      analytics.init();
    } else {
      this.logger.debug('Analytics disabled.');
    }
    console.log('Here is the position from Frontend: ' + this.props.position);
    const win = window as any;
    const doc = (document || win.document) as any;

    this.papercups = Papercups.init({
      customerId: props.customerId,
      accountId: props.accountId,
      inboxId: props.inboxId,
      baseUrl: props.baseUrl,
      customer: props.customer,
      debug: debugModeEnabled,
      setInitialMessage: this.getDefaultGreeting,
      onPresenceSync: this.onPresenceSync,
      onSetCustomerId: this.onSetCustomerId,
      onSetConversationId: this.onSetConversationId,
      onSetWidgetSettings: this.onWidgetSettingsLoaded,
      onMessagesUpdated: this.onMessagesUpdated,
      onConversationCreated: this.onConversationCreated,
      onMessageCreated: this.handleNewMessage,
    });

    this.subscriptions = [
      setupPostMessageHandlers(win, this.postMessageHandlers),
      addVisibilityEventListener(doc, this.handleVisibilityChange),
    ];

    this.state = {
      messages: [],
      // TODO: figure out how to determine these, either by IP or localStorage
      // (eventually we will probably use cookies for this)
      // TODO: remove this from state if possible, just use props instead?
      customerId: null,
      availableAgents: [],
      settings: {} as WidgetSettings,
      conversationId: null,
      isSending: false,
      isOpen: false,
      isTransitioning: false,
      isGameMode: false,
      shouldDisplayNotifications: false,
      popUpInitialMessage: false,
      shouldDisplayBranding: false,
      isMailIconClicked: false,
      isContactFormSubmitted: false,
      firstName: null,
      lastName: null,
      email: null,
      message: null,
      clickedSubmit: false,
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      },
      isLoading: false,
      statusMessageCF: '',
      numberOfMessages: 0,
      shouldSummarize: false,
      isSummarizeGenerated: false,
      shouldShowMessageLoading: false,
      avatarURL: props.avatarURL,
    };
  }

  async componentDidMount() {
    await this.papercups.start();

    this.emit('chat:loaded');

    if (this.isOnDeprecatedVersion()) {
      console.warn('You are currently on a deprecated version of Papercups.');
      console.warn('Please upgrade to version 1.1.2 or above.');
    }
  }

  componentWillUnmount() {
    this.papercups.disconnect();
    this.subscriptions.forEach((unsubscribe) => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    });
  }

  emit = (event: string, data = {}) => {
    const payload = {...data, ts: this.props.ts};
    this.logger.debug('Sending event from iframe:', {event, payload});

    parent.postMessage({event, payload}, '*'); // TODO: remove?
  };

  postMessageHandlers = (msg: any) => {
    const {event, payload = {}} = msg.data;
    this.logger.debug('Handling in iframe:', msg.data);

    switch (event) {
      case 'customer:set:id':
        return this.papercups
          .setCustomerId(payload)
          .fetchLatestConversation(payload);
      case 'customer:update':
        return this.handleCustomerUpdated(payload);
      case 'notifications:display':
        return this.handleDisplayNotifications(payload);
      case 'papercups:toggle':
        return this.handleToggleDisplay(payload);
      case 'papercups:plan':
        return this.handlePapercupsPlan(payload);
      case 'papercups:ping':
        return this.logger.debug('Pong!');
      default:
        return null;
    }
  };

  handleCustomerUpdated = (payload: any) => {
    const {customerId, metadata = {}} = payload;
    const {email = null, external_id: externalId = null} = metadata;
    const ts = this.props.ts || String(+new Date());
    const identifier = externalId || email || ts;

    return customerId
      ? this.papercups.updateCustomerMetadata(customerId, metadata)
      : this.papercups.identify(identifier, metadata);
  };

  handleDisplayNotifications = (payload: any) => {
    const {
      shouldDisplayNotifications = false,
      popUpInitialMessage = false,
    } = payload;

    return this.setState(
      {
        shouldDisplayNotifications,
        popUpInitialMessage,
      },
      () => {
        const unread = this.getUnreadMessages();

        if (
          shouldDisplayNotifications &&
          popUpInitialMessage &&
          unread.length === 0
        ) {
          this.markMessagesAsSeen();
        }
      }
    );
  };

  onWidgetSettingsLoaded = (settings: WidgetSettings) => {
    this.setState({settings});
  };

  onSetCustomerId = (customerId: string) => {
    this.logger.debug('Setting customer ID:', customerId);

    if (customerId !== this.state.customerId) {
      this.setState({customerId});
      this.emit('customer:updated', {customerId});
    }
  };

  onSetConversationId = (conversationId: string) => {
    this.setState({conversationId});
    this.emit('conversation:join', {
      conversationId,
      customerId: this.state.customerId,
    });
  };

  onConversationCreated = (customerId: string, data: any) => {
    this.logger.debug('Handling conversation created:', data);
  };

  onPresenceSync = (presence: Presence) => {
    this.logger.debug('Syncing presence:', presence.list());

    this.setState({
      availableAgents: presence
        .list()
        .map(({metas}) => {
          const [info] = metas;

          return info;
        })
        .filter((info) => !!info.user_id),
    });
  };

  onMessagesUpdated = (messages: Array<Message>) => {
    this.setState({messages}, () => this.scrollIntoView());

    const unseenMessages = messages.filter(
      (msg: Message) => !msg.seen_at && !!msg.user_id
    );

    if (unseenMessages.length > 0) {
      const [firstUnseenMessage] = unseenMessages;

      this.emitUnseenMessage(firstUnseenMessage);
    }
    const lastMessage = messages[messages.length - 1];
    if (lastMessage.user !== null) {
      // console.log("LAst Message: ", messages[messages.length-1]);
      this.setState({shouldShowMessageLoading: false});
      // console.log("shouldShowMessageLoading: ", this.state.shouldShowMessageLoading);
    }
  };

  scrollIntoView = () => {
    if (this.scrollToEl && this.scrollToEl.parentElement) {
      const parent = this.scrollToEl.parentElement;
      parent.scrollTop = this.scrollToEl.offsetTop - parent.offsetTop;
    }
  };

  handleVisibilityChange = (e?: any) => {
    const doc = document || (e && e.target);

    if (isWindowHidden(doc)) {
      return;
    }

    const {messages = []} = this.state;
    const shouldMarkSeen = messages.some((msg) => this.shouldMarkAsSeen(msg));

    if (shouldMarkSeen) {
      this.markMessagesAsSeen();
    }
  };

  handlePapercupsPlan = (payload: any = {}) => {
    this.logger.debug('Handling subscription plan:', payload);

    const {settings = {} as WidgetSettings} = this.state;
    const plan = payload && payload.plan;
    const shouldHideBranding = settings && settings.is_branding_hidden;
    const isTeamPlan = plan && String(plan).toLowerCase() === 'team';
    const shouldDisplayBranding = !(isTeamPlan && shouldHideBranding);

    this.setState({shouldDisplayBranding});
  };

  handleToggleDisplay = (payload: any = {}) => {
    const isOpen = !!payload.isOpen;

    this.setState({isOpen, isTransitioning: false}, () => {
      this.handleVisibilityChange();

      if (isOpen) {
        this.scrollIntoView();
      }
    });
  };

  getDefaultGreeting = (overrides = {}): Array<Message> => {
    const {greeting, awayMessage} = this.props;

    if (!greeting && !awayMessage) {
      return [];
    }

    const {settings, availableAgents = []} = this.state;
    const hasAvailableAgents = availableAgents.length > 0;
    const hasAwayMessage = awayMessage && awayMessage.length > 0;
    const isOutsideWorkingHours = settings.account?.is_outside_working_hours;
    const shouldDisplayAwayMessage =
      hasAwayMessage && isOutsideWorkingHours && !hasAvailableAgents;
    const body = shouldDisplayAwayMessage ? awayMessage : greeting;
    const hasValidMessage = body && body.trim().length > 0;

    if (!hasValidMessage) {
      return [];
    }

    return [
      {
        type: 'bot',
        customer_id: 'bot',
        body: shouldDisplayAwayMessage ? awayMessage : greeting,
        created_at: new Date().toISOString(), // TODO: what should this be?
        ...overrides,
      },
    ];
  };

  emitUnseenMessage = (message: Message) => {
    this.emit('messages:unseen', {message});
  };

  emitOpenWindow = (e: any) => {
    this.emit('papercups:open', {});
    // This is the state where we are waiting for parent window to reply,
    // letting us know when the transition from closed to open is over
    this.setState({isTransitioning: true});
  };

  emitCloseWindow = (e: any) => {
    this.setState({statusMessageCF: null});
    this.emit('papercups:close', {});
  };

  handleNewMessage = (message: Message) => {
    if (isAgentMessage(message)) {
      this.emit('message:received', message);
    } else {
      this.emit('message:sent', message);
    }

    if (this.shouldMarkAsSeen(message)) {
      this.markMessagesAsSeen();
    } else if (isAgentMessage(message)) {
      this.emitUnseenMessage(message);
      this.playNotificationSound();
    }
  };

  shouldMarkAsSeen = (message: Message) => {
    const {isOpen} = this.state;
    const {seen_at: seenAt} = message;

    // If already seen or the page is not visible, don't mark as seen
    if (seenAt || isWindowHidden(document)) {
      return false;
    }

    return isAgentMessage(message) && isOpen;
  };

  markMessagesAsSeen = () => {
    const {customerId, conversationId} = this.state;

    this.logger.debug('Marking messages as seen!');
    this.emit('messages:seen', {});

    if (customerId && conversationId) {
      this.papercups.markMessagesAsSeen();
    }
  };

  handleSendMessage = async (message: Partial<Message>, email?: string) => {
    if (this.state.isSending) {
      return;
    }

    const {body = ''} = message;

    if (shouldActivateGameMode(body)) {
      this.setState({isGameMode: true});

      return;
    }
    this.papercups.sendNewMessage(message, email);
    this.setState({isSummarizeGenerated: false});
    this.setState({shouldShowMessageLoading: true});
  };

  // If this is true, we don't allow the customer to send any messages
  // until they enter an email address in the chat widget.
  askForEmailUpfront = () => {
    const {customer, shouldRequireEmail} = this.props;
    const {customerId, messages = []} = this.state;

    if (!shouldRequireEmail) {
      return false;
    }

    if (customer && customer.email) {
      return false;
    }

    // TODO: figure out what this actual logic should be...
    const previouslySentMessages = messages.find((msg) =>
      isCustomerMessage(msg, customerId)
    );

    return !previouslySentMessages;
  };

  playNotificationSound = async (volume = 0.2) => {
    try {
      const file = '/alert.mp3';
      const audio = new Audio(file);
      audio.volume = volume;

      await audio?.play();
    } catch (err) {
      this.logger.error('Failed to play notification sound:', err);
    }
  };

  handleGameLoaded = (e: any) => {
    if (e.currentTarget && e.currentTarget.focus) {
      e.currentTarget.focus();
    }
  };

  handleLeaveGameMode = () => {
    this.setState({isGameMode: false}, () => this.scrollIntoView());
  };

  isOnDeprecatedVersion = (): boolean => {
    const {version = '1.0.0'} = this.props;
    const [major, minor, patch] = version.split('.').map((n) => Number(n) || 0);

    return major <= 1 && minor <= 1 && patch <= 2;
  };

  handleSelectQuickReply = ({text, action}: QuickReply) => {
    this.handleSendMessage({
      body: text,
      metadata: {
        // TODO: what should this be called?
        reply_action: action,
      },
    });
  };

  getQuickReplies = (messages: Array<Message>): Array<QuickReply> => {
    if (!messages || messages.length === 0) {
      return [];
    }

    const message = messages[messages.length - 1];

    if (!isAgentMessage(message)) {
      return [];
    }

    const replies =
      message.quick_replies || message.metadata?.quick_replies || [];

    return replies.filter(
      (reply: any): reply is QuickReply => !!reply.text && !!reply.action
    );
  };

  getUnreadMessages = () => {
    const MAX_CHARS = 140;
    const {customerId, popUpInitialMessage, messages = []} = this.state;
    const [initialMessage] = messages;
    const hasOnlyBotMessage =
      messages.length === 1 &&
      initialMessage.type === 'bot' &&
      !initialMessage.seen_at;

    if (popUpInitialMessage && hasOnlyBotMessage) {
      return messages;
    }

    return messages
      .filter((msg) => {
        const {seen_at: seen, type: messageType} = msg;

        if (seen || messageType === 'bot') {
          return false;
        }

        // NB: `msg.type` doesn't come from the server, it's just a way to
        // help identify unsent messages in the frontend for now
        const isMe = isCustomerMessage(msg, customerId);

        return !isMe;
      })
      .slice(0, 2) // Only show the first 2 unread messages
      .map((msg) => {
        const {body} = msg;

        return {...msg, body: shorten(body, MAX_CHARS)};
      });
  };

  handleClickMailIcon = () => {
    this.setState((prevState) => ({
      isMailIconClicked: !prevState.isMailIconClicked,
    }));
    this.setState((prevState) => ({
      isContactFormSubmitted: false,
    }));
    this.setState({statusMessageCF: null});
  };
  handleSummarize = () => {
    const updateMessages = this.props.greeting
      ? this.state.messages.length - 1
      : this.state.messages.length;

    this.setState({numberOfMessages: updateMessages}, () => {
      if (
        Math.floor(this.state.numberOfMessages / 2) >= 5 &&
        !this.state.isSummarizeGenerated
      ) {
        this.setState({shouldSummarize: true});
        console.log('Call an API');
        console.log('Conversation ID: ', this.state.conversationId);
        fetch(
          'https://backend.inhotel.io/contact_form/summarize_chat_history/',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              conversation_id: this.state.conversationId,
              inbox_id: this.props.inboxId,
            }),
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            // console.log('Success:', data);
            // this.setState({clickedSubmit: false});
            // console.log('Response data:', data.message); // This will log the actual data object
            if (data.status === -1) {
              console.log('Error');
              this.setState({shouldSummarize: false});
            } else {
              // console.log("message before summarize: ", this.state.message);
              this.setState({message: data.summarize_chat_message});
              this.setState({email: data.email});
              this.setState({firstName: data.first_name});
              this.setState({lastName: data.last_name});
              this.setState({isSummarizeGenerated: true});
              // console.log("message after summarize: ", this.state.message);
            }
            this.setState({
              shouldSummarize: false,
            });
          })
          .catch((error) => {
            console.error('Error:', error);
            this.setState({
              shouldSummarize: false,
            });
          });
        // setTimeout(() => {
        //   this.setState({ shouldSummarize: false });
        //   console.log('State updated');
        // }, 3000);
      }
    });
  };

  handleChangeCF = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.target;
    const updatedValue: unknown = {[name]: value};
    this.setState(updatedValue as Pick<State, keyof State>);
  };

  // handleSubmitCF = () => {
  //   const {firstName, lastName, email, message} = this.state;
  //   this.setState({
  //     isContactFormSubmitted: true,
  //   });
  //   console.log('Submitted!');

  // };
  handleSubmitCF = () => {
    this.setState({clickedSubmit: true});
    const {firstName, lastName, email, message} = this.state;
    if (!firstName || !lastName || !email || !message) {
      console.log('Missing value');
      return;
    }

    this.setState({
      isContactFormSubmitted: false,
      isLoading: true,
    });
    console.log('Submitting...');

    fetch('https://backend.inhotel.io/contact_form/send_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email: email,
        message: message,
        inbox_id: this.props.inboxId,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Success:', data);
        this.setState({clickedSubmit: false});
        // Update the state to reflect the success and stop loading
        console.log('Response data:', data.message); // This will log the actual data object
        if (data.status === -1) {
          console.log('Error');
          this.setState({statusMessageCF: data.message});
          this.setState({
            isLoading: false,
          });
        } else {
          this.setState({
            isContactFormSubmitted: true,
            isLoading: false,
          });
          this.setState({statusMessageCF: null});
        }
        this.setState({
          isContactFormSubmitted: true,
          isLoading: false,
        });
        // Optionally, clear the form fields here if needed
      })
      .catch((error) => {
        console.error('Error:', error);
        // Update the state to stop loading and handle errors
        this.setState({
          isLoading: false,
        });
        // Show an error message here if needed
      });
  };

  render() {
    const {
      title = 'Welcome!',
      subtitle = 'How can we help you?',
      newMessagePlaceholder = 'Start typing...',
      emailInputPlaceholder = 'Enter your email',
      agentAvailableText = "We're online right now!",
      agentUnavailableText = "We're away at the moment.",
      newMessagesNotificationText = 'View new messages',
      companyName,
      isMobile = false,
      isCloseable = true,
      showAgentAvailability = false,
      accountId,
      baseUrl,
      shouldShowContactForm = false,
      avatarURL,
    } = this.props;
    const {
      customerId,
      messages = [],
      availableAgents = [],
      isSending,
      isOpen,
      isTransitioning,
      isGameMode,
      shouldDisplayNotifications,
      shouldDisplayBranding,
    } = this.state;

    if (isGameMode) {
      return (
        <EmbeddedGame
          isMobile={isMobile}
          onLoadGame={this.handleGameLoaded}
          onLeaveGame={this.handleLeaveGameMode}
        />
      );
    }

    if (isTransitioning) {
      return null; // TODO: need to figure out the best way to handle this
    }

    if (!isOpen && shouldDisplayNotifications) {
      return (
        <UnreadMessages
          messages={this.getUnreadMessages()}
          newMessagesNotificationText={newMessagesNotificationText}
          isMobile={isMobile}
          onOpen={this.emitOpenWindow}
        />
      );
    }

    // FIXME: only return null for versions of the chat-widget after v1.1.0
    if (!isOpen && !this.isOnDeprecatedVersion()) {
      return null;
    }

    const shouldAskForEmail = this.askForEmailUpfront();
    const hasAvailableAgents = availableAgents.length > 0;
    const replies = this.getQuickReplies(messages);
    console.log(
      'ChatWindow: ',
      shouldShowContactForm,
      'Type: ',
      typeof shouldShowContactForm
    );
    // const {greeting}= this.props
    // var numberOfMessages = 0;
    // console.log("NewMessagePlaceholder: ", newMessagePlaceholder);
    // console.log("newMessagesNotificationText: ", newMessagesNotificationText);
    // console.log('no. of messages', Math.floor(this.state.numberOfMessages / 2));
    // console.log('SummarizeGenerated?: ', this.state.isSummarizeGenerated);
    // console.log("Greeting", this.props.greeting)
    return (
      <Box
        id="widgetContainer"
        sx={{
          height: '100%',
          width: '100%',
        }}
      >
        <Flex
          className={isMobile ? 'Mobile' : ''}
          sx={{
            bg: this.state.isMailIconClicked
              ? 'rgb(239, 239, 239)'
              : 'background',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            // minWidth: '376px',
            flex: 1,
          }}
        >
          <Box sx={{bg: 'primary', position: 'relative'}}>
            <Box pt={3} pb={showAgentAvailability ? 12 : 16} px={20}>
              {/* TODO: wrap in a button element */}
              {isCloseable && !this.isOnDeprecatedVersion() && (
                <CloseIcon
                  className="CloseIcon"
                  width={24}
                  height={24}
                  onClick={this.emitCloseWindow}
                />
              )}
              <Heading
                as="h2"
                className="Papercups-heading"
                sx={{color: 'background', my: 1, mr: 12}}
              >
                {title}
              </Heading>
              <Text sx={{color: 'offset'}}>{subtitle}</Text>
            </Box>

            {showAgentAvailability && (
              <AgentAvailability
                hasAvailableAgents={hasAvailableAgents}
                agentAvailableText={agentAvailableText}
                agentUnavailableText={agentUnavailableText}
              />
            )}
          </Box>
          {!this.state.isMailIconClicked && (
            <Box
              p={3}
              px={'20px'}
              sx={{
                flex: 1,
                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 21px 4px -20px inset',
                overflowY: 'scroll',
              }}
            >
              {messages.map((msg, key) => {
                const next = messages[key + 1];
                const isLastInGroup = next
                  ? msg.customer_id !== next.customer_id
                  : true;
                const isLastMessage = key === messages.length - 1;
                const isMe = isCustomerMessage(msg, customerId);
                var userBot = {
                  archived_at: null,
                  created_at: '2024-03-11T07:13:39',
                  disabled_at: null,
                  display_name: null,
                  email: 'testhotel@inhotel.io',
                  full_name: null,
                  id: 117,
                  object: 'user',
                  profile_photo_url: this.state.avatarURL,
                  role: 'admin',
                };
                // if (msg.user != null){
                //   userBot = msg.user;
                // }
                const loader =
                  isLastMessage && this.state.shouldShowMessageLoading ? (
                    <Box
                      sx={{
                        backgroundColor: 'rgba(200, 200, 200, 0.2)',
                        padding: '6px 10px',
                        borderRadius: '10px',
                      }}
                    >
                      <PulseLoader
                        color="rgba(200, 200, 200, 1.0)"
                        size="7px"
                        speedMultiplier={0.4}
                      />
                    </Box>
                  ) : null;
                return (
                  <React.Fragment key={key}>
                    <motion.div
                      initial={{opacity: 0, x: isMe ? 2 : -2}}
                      animate={{opacity: 1, x: 0}}
                      transition={{duration: 0.2, ease: 'easeIn'}}
                    >
                      <ChatMessage
                        message={msg}
                        isMe={isMe}
                        companyName={companyName}
                        isLastInGroup={isLastInGroup}
                        shouldDisplayTimestamp={isLastMessage}
                        shouldShowLoader={false}
                        avatarURL={avatarURL}
                      />
                    </motion.div>
                    {isLastMessage && this.state.shouldShowMessageLoading && (
                      <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.2}}
                      >
                        <ChatMessage
                          message={{body: '', user: userBot}}
                          loader={loader}
                          shouldShowLoader={true}
                          avatarURL={avatarURL}
                        />
                        {/* <SyncLoader color={this.props.primaryColor}  size='7px'/> */}
                      </motion.div>
                    )}
                  </React.Fragment>
                );
              })}

              {replies && replies.length > 0 ? (
                <QuickReplies
                  replies={replies}
                  onSelect={this.handleSelectQuickReply}
                />
              ) : null}

              <div ref={(el) => (this.scrollToEl = el)} />
            </Box>
          )}

          {this.state.isMailIconClicked && (
            <Box sx={{flex: 1}} px={'20px'}>
              <ContactForm
                handleChange={this.handleChangeCF}
                handleSubmit={this.handleSubmitCF}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                email={this.state.email}
                message={this.state.message}
                clickedSubmit={this.state.clickedSubmit}
                shouldSummarize={this.state.shouldSummarize}
                primaryColor={this.props.primaryColor}
              />
            </Box>
          )}
          {!this.state.isMailIconClicked && (
            <Box
              px={'20px'}
              // className="footer-bg"
              sx={{
                // bg: this.state.isMailIconClicked
                //   ? 'rgba(233, 233, 233, 0.7)'
                //   : 'background',
                bg: 'background',
                // bg:'rgba(248,248,248, 1.0)',
                borderTop: '1px solid rgb(230, 230, 230)',
                // TODO: only show shadow on focus TextArea below
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 100px 0px',
                marginTop: '2px',
              }}
            >
              {/*
              NB: we use a `key` prop here to force re-render on open so
              that the input will auto-focus appropriately
            */}
              <ChatFooter
                key={isOpen ? 1 : 0}
                accountId={accountId}
                baseUrl={baseUrl}
                placeholder={newMessagePlaceholder}
                emailInputPlaceholder={emailInputPlaceholder}
                isSending={isSending}
                shouldRequireEmail={shouldAskForEmail}
                onSendMessage={this.handleSendMessage}
                // isMailIconClicked={this.state.isMailIconClicked}
              />
            </Box>
          )}

          {true && (
            <Box
              px={'20px'}
              // className="footer-bg"
              sx={{
                // bg: this.state.isMailIconClicked
                //   ? 'rgba(233, 233, 233, 0.7)'
                //   : 'background',
                bg: 'rgb(239, 239, 239)',
                // borderTop: '1px solid rgb(230, 230, 230)',
                // TODO: only show shadow on focus TextArea below
                // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 100px 0px',
                marginTop: '2px',
              }}
            >
              <ChatFooterEmail
                onClickMailIcon={this.handleClickMailIcon}
                isMailIconClicked={this.state.isMailIconClicked}
                handleSubmitCF={this.handleSubmitCF}
                isSubmittedCF={this.state.isContactFormSubmitted}
                hotelEmail={this.props.hotelEmail}
                hotelPhone={this.props.hotelPhone}
                shouldShowContactForm={shouldShowContactForm}
                isLoading={this.state.isLoading}
                statusMessageCF={this.state.statusMessageCF}
                handleSummarize={this.handleSummarize}
              />
            </Box>
          )}

          <Box
            sx={{
              // bg: this.state.isMailIconClicked
              //   ? 'rgba(233, 233, 233, 0.7)'
              //   : 'background',
              bg: 'rgb(239, 239, 239)',
            }}
          >
            {shouldDisplayBranding && (
              <PapercupsBranding
                isMailIconClicked={this.state.isMailIconClicked}
              />
            )}
          </Box>

          <img
            alt="Papercups"
            src="https://papercups.s3.us-east-2.amazonaws.com/papercups-logo.svg"
            width="0"
            height="0"
          />
        </Flex>
      </Box>
    );
  }
}

export default ChatWindow;
