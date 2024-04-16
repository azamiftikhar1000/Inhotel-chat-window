import React, {useState} from 'react';
import {Box, Button, Flex, Input, Link, Text} from 'theme-ui';
import Upload from 'rc-upload';
import ResizableTextArea from './ResizableTextArea';
import SendIcon from './SendIcon';
import PaperclipIcon from './PaperclipIcon';
import {Attachment, Message} from '../helpers/types';
import MailIcon from './MailIcon';
import styles from './ChatFooter.module.css';
import CloseIcon from './CloseIcon';
import displayContactForm from './ChatWindow';
import PhoneIcon from './PhoneIcon';
import DiscardIcon from './DiscardIcon';
import Tippy from '@tippyjs/react';
import {FadeLoader} from 'react-spinners';

const ChatFooter = ({
  placeholder,
  emailInputPlaceholder,
  isSending,
  shouldRequireEmail,
  accountId,
  baseUrl,
  onSendMessage,
  onClickMailIcon,
  isMailIconClicked,
  handleSubmitCF,
  isSubmittedCF,
  hotelEmail,
  hotelPhone,
  shouldShowContactForm,
  isLoading,
  statusMessageCF,
}: {
  placeholder?: string;
  emailInputPlaceholder?: string;
  isSending: boolean;
  shouldRequireEmail?: boolean;
  accountId: string;
  baseUrl?: string;
  onSendMessage: (message: Partial<Message>, email?: string) => Promise<void>;
  onClickMailIcon: () => void;
  isMailIconClicked: boolean;
  handleSubmitCF: () => void;
  isSubmittedCF: boolean;
  hotelEmail: string;
  hotelPhone: string;
  shouldShowContactForm: boolean;
  isLoading: boolean;
  statusMessageCF: string;
}) => {
  const [tooltipContentEmail, setTooltipContentEmail] = useState(
    'Copy to clipboard'
  );
  const [tooltipContentPhone, setTooltipContentPhone] = useState(
    'Copy to clipboard'
  );

  const copyToClipboard = (
    text: string,
    setTooltipContent: React.Dispatch<React.SetStateAction<string>>
  ) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setTooltipContent('Copied!');
        setTimeout(() => setTooltipContent('Click to copy'), 1500);
      },
      (err) => {
        console.error('Failed to copy:', err);
        setTooltipContent('Failed to copy');
        setTimeout(() => setTooltipContent('Click to copy'), 1500);
      }
    );
  };
  const [message, setMessage] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isUploading, setIsUploading] = React.useState(false);
  const [error, setError] = React.useState<any>(null);
  const messageInput = React.useRef(null);

  const hasValidEmail = email && email.length > 5 && email.indexOf('@') !== -1;
  const isDisabled = isUploading || isSending;

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleSetEmail = (e?: React.FormEvent<HTMLFormElement>) => {
    e && e.preventDefault();

    if (messageInput.current) {
      messageInput.current.focus();
    }
  };

  const [clickedMailIcon, setClickedMailIcon] = useState(false);

  const handleSendMessage = (e?: React.FormEvent<HTMLFormElement>) => {
    e && e.preventDefault();
    console.log('isSending', isSending);
    onSendMessage({body: message}, email);
    setMessage('');
    setEmail('');
  };

  const handleMailClick = () => {
    // console.log("Mail was clicked!")
    setClickedMailIcon(!clickedMailIcon);
    if (clickedMailIcon === true) {
      console.log('Open the tray');
    } else {
      console.log('Close');
    }
  };

  const mailContentStyle = clickedMailIcon
    ? {
        animation: '{styles.slideIn} 5.5s forwards',
      }
    : {
        display: 'none',
      };

  const handleUploadStarted = () => setIsUploading(true);

  const handleUploadError = (err: any) => {
    setError(err);
    setIsUploading(false);
  };

  const handleUploadSuccess = ({data: file}: {data: Attachment}) => {
    if (file && file.id) {
      onSendMessage({body: message, file_ids: [file.id]}, email);
      setMessage('');
      setEmail('');
      setIsUploading(false);
      setError(null);
    }
  };

  const handleKeyDown = (e: any) => {
    const {key, shiftKey} = e;

    if (!shiftKey && key === 'Enter') {
      handleSendMessage(e);
    }
  };

  const [isDiscardFocused, setIsDiscardFocused] = useState(false);
  const useHoverStylesOnEnter = () => {
    setIsDiscardFocused(true);
  };
  const useHoverStylesOnLeave = () => {
    setIsDiscardFocused(false);
  };
  let shouldShowCF: boolean = Boolean(shouldShowContactForm);

  // console.log('shouldShowCF: ', shouldShowCF);
  return (
    <Box
    // className='footer-bg'
    // sx={{bg: 'rgba(245, 245, 245, 0.3)'}}
    >
      {!shouldShowCF && (
        <Box>
          <form onSubmit={handleSetEmail}>
            {shouldRequireEmail && (
              <Box
                py={1}
                // sx={{borderBottom: '1px solid rgb(230, 230, 230)'}}
              >
                <Input
                  sx={{variant: 'styles.input.transparent'}}
                  placeholder={emailInputPlaceholder}
                  value={email}
                  onChange={handleEmailChange}
                />
              </Box>
            )}
          </form>

          <form onSubmit={handleSendMessage}>
            <Flex sx={{alignItems: 'center'}} py={2}>
              <Box mr={2} sx={{flex: 1}}>
                <ResizableTextArea
                  sx={{
                    fontFamily: 'body',
                    color: 'black',
                    variant: 'styles.input.transparent',
                  }}
                  ref={messageInput}
                  className="TextArea--transparent"
                  placeholder={placeholder}
                  minRows={1}
                  maxRows={4}
                  autoFocus
                  value={message}
                  disabled={
                    isDisabled || (shouldRequireEmail && !hasValidEmail)
                  }
                  onKeyDown={handleKeyDown}
                  onChange={handleMessageChange}
                />
              </Box>

              <Flex>
                {/* <Upload
               action={`${baseUrl}/api/upload`}
               data={{account_id: accountId}}
               headers={{'X-Requested-With': null}}
               onStart={handleUploadStarted}
               onSuccess={handleUploadSuccess}
               onError={handleUploadError}
             >
               <Button
                 variant="link"
                 type="button"
                 disabled={isDisabled}
                 sx={{
                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center',
                   borderRadius: '50%',
                   height: '36px',
                   width: '36px',
                   padding: 0,
                 }}
               >
                 <PaperclipIcon
                   width={16}
                   height={16}
                   fill={error ? 'red' : 'gray'}
                 />
               </Button>
             </Upload> */}

                <Button
                  variant="primary"
                  type="submit"
                  disabled={isDisabled}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    height: '36px',
                    width: '36px',
                    padding: 0,
                  }}
                >
                  <SendIcon width={16} height={16} fill="background" />
                </Button>
              </Flex>
            </Flex>
          </form>
        </Box>
      )}
      {shouldShowCF && (
        <Box
          sx={
            {
              // minHeight: '90px',
              // bg: '#f5f5f5',
            }
          }
        >
          {isMailIconClicked && (
            <Box>
              <Flex
                sx={{
                  alignItems: 'center',
                  justifyContent:
                    statusMessageCF === null ? 'space-between' : 'left',
                  // justifyContent:'left',
                  flexDirection: 'row',
                }}
                py={2}
              >
                <Box
                  mr={2}
                  sx={{flex: '0 0 auto', display: 'flex', alignItems: 'center'}}
                >
                  <Tippy
                    // theme="dynamic-primary"
                    content="Discard message"
                    interactive={true}
                    interactiveBorder={20}
                    delay={100}
                  >
                    <Button
                      onClick={() => {
                        onClickMailIcon();
                        useHoverStylesOnLeave();
                      }}
                      onMouseEnter={useHoverStylesOnEnter}
                      onMouseLeave={useHoverStylesOnLeave}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '50%',
                        height: '36px',
                        width: '36px',
                        padding: '2px',
                        borderStyle: 'solid',
                        borderColor: 'black',
                        borderWidth: '2px',
                        bg: '#f5f5f5',
                      }}
                    >
                      <DiscardIcon
                        fill={isDiscardFocused ? 'white' : 'black'}
                      />
                    </Button>
                  </Tippy>
                  {!isSubmittedCF && (
                    <Box
                      sx={{
                        display: 'flex',
                        color: 'rgba(148, 148, 156, 1.0)',
                        marginLeft: '8px',
                      }}
                    >
                      Discard
                    </Box>
                  )}
                </Box>

                {!isSubmittedCF && (
                  <Box sx={{display: 'flex', alignItems: 'center', mb: '2px'}}>
                    {!isLoading && (
                      <Box
                        sx={{
                          display: 'flex',
                          color: 'rgba(148, 148, 156, 1.0)',
                          marginRight: '8px',
                        }}
                      >
                        Send
                      </Box>
                    )}
                    {isLoading && (
                      <Box
                        sx={{
                          display: 'flex',
                          color: 'rgba(148, 148, 156, 1.0)',
                          marginRight: '8px',
                        }}
                      >
                        Sending
                      </Box>
                    )}
                    <Tippy
                      // theme="dynamic-primary"
                      content="Send as email"
                      interactive={true}
                      interactiveBorder={20}
                      delay={100}
                    >
                      <Button
                        onClick={handleSubmitCF}
                        sx={{
                          display: 'flex',
                          position: 'relative',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: '50%',
                          height: '36px',
                          width: '36px',
                          padding: '2px',
                          borderWidth: '2px',
                          ml: 'auto', // Push it to the right if needed, or adjust as per design
                        }}
                      >
                        {!isLoading && <SendIcon fill="background" />}
                        {/* {isLoading && (<FadeLoader color="background" height={'16px'} width={'16px'} />)} */}
                        {isLoading && (
                          <div
                            style={{
                              position: 'absolute', // Use absolute positioning within the button
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <FadeLoader
                              color="background"
                              height="6px"
                              width="4px"
                              margin={-5}
                              cssOverride={{
                                marginTop: '16px',
                                marginLeft: '8px',
                              }}
                            />
                          </div>
                        )}
                      </Button>
                    </Tippy>
                  </Box>
                )}
                {isSubmittedCF && statusMessageCF == null && (
                  <Box
                    sx={{
                      fontSize: '0.85em',
                      display: 'flex',
                      marginLeft: '8px', // Ensure some space between the button and text, adjust as needed
                    }}
                  >
                    Thank you for your message! Please expect our reply within 1
                    working day.
                  </Box>
                )}

                {statusMessageCF != null && (
                  <Box
                    sx={{
                      fontSize: '0.85em',
                      display: 'flex',
                      marginLeft: '8px', // Ensure some space between the button and text, adjust as needed
                    }}
                  >
                    {statusMessageCF}
                  </Box>
                )}
              </Flex>
            </Box>
          )}
          {!isMailIconClicked && (
            <Box>
              <form onSubmit={handleSetEmail}>
                {shouldRequireEmail && (
                  <Box
                    py={1}
                    sx={{borderBottom: '1px solid rgb(230, 230, 230)'}}
                  >
                    <Input
                      sx={{variant: 'styles.input.transparent'}}
                      placeholder={emailInputPlaceholder}
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </Box>
                )}
              </form>

              <form onSubmit={handleSendMessage}>
                <Flex sx={{alignItems: 'center', bg: 'background'}} py={2}>
                  <Box mr={2} sx={{flex: 1}}>
                    <ResizableTextArea
                      sx={{
                        fontFamily: 'body',
                        color: 'black',
                        variant: 'styles.input.transparent',
                      }}
                      ref={messageInput}
                      className="TextArea--transparent"
                      placeholder={placeholder}
                      minRows={1}
                      maxRows={4}
                      autoFocus
                      value={message}
                      disabled={
                        isDisabled || (shouldRequireEmail && !hasValidEmail)
                      }
                      onKeyDown={handleKeyDown}
                      onChange={handleMessageChange}
                    />
                  </Box>

                  <Flex>
                    {/* <Upload
                action={`${baseUrl}/api/upload`}
                data={{account_id: accountId}}
                headers={{'X-Requested-With': null}}
                onStart={handleUploadStarted}
                onSuccess={handleUploadSuccess}
                onError={handleUploadError}
              >
                <Button
                  variant="link"
                  type="button"
                  disabled={isDisabled}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    height: '36px',
                    width: '36px',
                    padding: 0,
                  }}
                >
                  <PaperclipIcon
                    width={16}
                    height={16}
                    fill={error ? 'red' : 'gray'}
                  />
                </Button>
              </Upload> */}

                    <Button
                      variant="primary"
                      type="submit"
                      disabled={isDisabled}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '50%',
                        height: '36px',
                        width: '36px',
                        padding: 0,
                      }}
                    >
                      <SendIcon width={16} height={16} fill="background" />
                    </Button>
                  </Flex>
                </Flex>
              </form>
            </Box>
          )}
          <Flex
            p={0}
            sx={{
              color: 'tertiary',
              // bg: '#f8f8f8',
              // variant: 'styles.input.transparent',
              flex: 1,
              fontSize: '14px',
              alignItems: 'center',
              // justifyContent: 'space-between'
            }}
          >
            <Flex
              sx={{
                flex: 1,
                alignItems: 'stretch',
                justifyContent: 'space-between',
                borderTop: isMailIconClicked
                  ? '1px solid rgb(230, 230, 230)'
                  : '',
                minHeight: '40px',
                // TODO: only show shadow on focus TextArea below
                // boxShadow: isMailIconClicked? 'rgba(0, 0, 0, 0.1) 0px 0px 100px 0px': '',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <PhoneIcon />
                <Box
                  p={1}
                  sx={{
                    mr: 2,
                    wordWrap: 'break-word',
                    fontSize: '14px',
                  }}
                >
                  <Tippy content={tooltipContentPhone}>
                    <Text
                      sx={{ml: 2, whiteSpace: 'nowrap', cursor: 'pointer'}}
                      onClick={() =>
                        copyToClipboard(hotelPhone, setTooltipContentPhone)
                      }
                    >
                      {hotelPhone}
                    </Text>
                  </Tippy>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    wordWrap: 'break-word',
                    mr: 2,
                    fontSize: '14px',
                  }}
                >
                  <Tippy content={tooltipContentEmail}>
                    <Text
                      sx={{
                        ml: 2,
                        mr: 2,
                        maxWidth: '122px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        cursor: 'pointer',
                      }}
                      onClick={() =>
                        copyToClipboard(hotelEmail, setTooltipContentEmail)
                      }
                    >
                      {hotelEmail}
                    </Text>
                  </Tippy>
                </Box>
                <Tippy
                  // theme="dynamic-primary"
                  content="Contact Us"
                  interactive={true}
                  interactiveBorder={20}
                  delay={100}
                >
                  <Box
                    onClick={onClickMailIcon}
                    sx={{
                      cursor: 'pointer',
                      visibility: isMailIconClicked ? 'hidden' : 'visible',
                    }}
                  >
                    <MailIcon />
                  </Box>
                </Tippy>
              </Box>
            </Flex>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default ChatFooter;
