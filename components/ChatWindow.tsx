import React, {useState} from 'react';
import {Box, Flex, Heading, Text} from 'theme-ui';
import {Presence} from 'phoenix';
import {motion} from 'framer-motion';
import {
  Papercups,
  isCustomerMessage,
  isAgentMessage,
} from '@papercups-io/browser';
import {ChatMessage, SenderAvatar} from './ChatMessage';
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
  showContactForm: boolean;
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
      showContactForm: false,
    };
  }

  handleMailIconClick = () => {
    this.setState((prevState) => ({
      showContactForm: !prevState.showContactForm,
      messages: prevState.showContactForm
        ? prevState.messages.filter((msg) => msg.type !== 'contactform')
        : [
            ...prevState.messages,
            {id: `contact_form`, type: 'contactform', body: ''},
          ],
    }));
  };

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
  };

  scrollIntoView = () => {
    this.scrollToEl && this.scrollToEl.scrollIntoView(false);
  };

  // If the page is not visible (i.e. user is looking at another tab),
  // we want to mark messages as read once the chat widget becomes visible
  // again, as long as it's open.
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

    return (
      <Flex
        className={isMobile ? 'Mobile' : ''}
        sx={{
          bg: 'background',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
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

            {/* Mail Icon */}
            <Box
              // pt={3} pb={showAgentAvailability ? 12 : 16} px={2}
              sx={{color: 'background'}}
            >
              <div
                onClick={this.handleMailIconClick}
                style={{cursor: 'pointer'}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M5.96802 4H18.032C18.4706 3.99999 18.8491 3.99998 19.1624 4.02135C19.4922 4.04386 19.8221 4.09336 20.1481 4.22836C20.8831 4.53284 21.4672 5.11687 21.7716 5.85195C21.9066 6.17788 21.9561 6.50779 21.9787 6.83762C22 7.15088 22 7.52936 22 7.96801V16.032C22 16.4706 22 16.8491 21.9787 17.1624C21.9561 17.4922 21.9066 17.8221 21.7716 18.1481C21.4672 18.8831 20.8831 19.4672 20.1481 19.7716C19.8221 19.9066 19.4922 19.9561 19.1624 19.9787C18.8491 20 18.4706 20 18.032 20H5.96801C5.52936 20 5.15088 20 4.83762 19.9787C4.50779 19.9561 4.17788 19.9066 3.85195 19.7716C3.11687 19.4672 2.53284 18.8831 2.22836 18.1481C2.09336 17.8221 2.04386 17.4922 2.02135 17.1624C1.99998 16.8491 1.99999 16.4706 2 16.032V7.96802C1.99999 7.52937 1.99998 7.15088 2.02135 6.83762C2.04386 6.50779 2.09336 6.17788 2.22836 5.85195C2.53284 5.11687 3.11687 4.53284 3.85195 4.22836C4.17788 4.09336 4.50779 4.04386 4.83762 4.02135C5.15088 3.99998 5.52937 3.99999 5.96802 4ZM4.31745 6.27777C4.68114 5.86214 5.3129 5.82002 5.72854 6.1837L11.3415 11.095C11.7185 11.4249 12.2815 11.4249 12.6585 11.095L18.2715 6.1837C18.6871 5.82002 19.3189 5.86214 19.6825 6.27777C20.0462 6.69341 20.0041 7.32517 19.5885 7.68885L13.9755 12.6002C12.8444 13.5899 11.1556 13.5899 10.0245 12.6002L4.41153 7.68885C3.99589 7.32517 3.95377 6.69341 4.31745 6.27777Z"></path>
                </svg>
              </div>
            </Box>
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

        <Box
          p={3}
          sx={{
            flex: 1,
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 21px 4px -20px inset',
            overflowY: 'scroll',
          }}
        >
          {messages.map((msg, key) => {
            // Slight hack
            const next = messages[key + 1];
            const isLastInGroup = next
              ? msg.customer_id !== next.customer_id
              : true;
            const shouldDisplayTimestamp = key === messages.length - 1;
            const isMe = isCustomerMessage(msg, customerId);
            const uniqueKey = Date.now();

            if (msg.type === 'contactform' && this.state.showContactForm) {
              // Render the ContactForm as part of the chat
              return (
                <motion.div
                  key={msg.id}
                  initial={{opacity: 0, x: isMe ? 2 : -2}}
                  animate={{opacity: 1, x: 0}}
                  transition={{duration: 0.2, ease: 'easeIn'}}
                >
                  <Flex
                    sx={{
                      flex: 0,
                      alignItems: 'center',
                      justifyContent: 'start',
                    }}
                  >
                    <SenderAvatar
                      name="Contact Form"
                      isBot={false}
                      user={null}
                    />
                    <ContactForm
                      isVisible={true}
                      onClose={this.handleMailIconClick}
                    />
                  </Flex>
                </motion.div>
              );
            } else {
              // Render regular chat messages
              return (
                <motion.div
                  key={msg.id}
                  initial={{opacity: 0, x: isMe ? 2 : -2}}
                  animate={{opacity: 1, x: 0}}
                  transition={{duration: 0.2, ease: 'easeIn'}}
                >
                  <ChatMessage
                    message={msg}
                    isMe={isMe}
                    companyName={this.props.companyName}
                    isLastInGroup={isLastInGroup}
                    shouldDisplayTimestamp={shouldDisplayTimestamp}
                  />
                </motion.div>
              );
            }
          })}

          {replies && replies.length > 0 ? (
            <QuickReplies
              replies={replies}
              onSelect={this.handleSelectQuickReply}
            />
          ) : null}

          <div ref={(el) => (this.scrollToEl = el)} />
        </Box>

        {shouldDisplayBranding && <PapercupsBranding />}

        <Box
          px={2}
          sx={{
            borderTop: '1px solid rgb(230, 230, 230)',
            // TODO: only show shadow on focus TextArea below
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 100px 0px',
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
          />
        </Box>

        <img
          alt="Papercups"
          src="https://papercups.s3.us-east-2.amazonaws.com/papercups-logo.svg"
          width="0"
          height="0"
        />
      </Flex>
    );
  }
}

export default ChatWindow;
