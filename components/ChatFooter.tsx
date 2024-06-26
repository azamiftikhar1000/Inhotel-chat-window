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
}: // onClickMailIcon,
// isMailIconClicked,
// handleSubmitCF,
// isSubmittedCF,
// hotelEmail,
// hotelPhone,
// shouldShowContactForm,
// isLoading,
// statusMessageCF,
// handleSummarize,
{
  placeholder?: string;
  emailInputPlaceholder?: string;
  isSending: boolean;
  shouldRequireEmail?: boolean;
  accountId: string;
  baseUrl?: string;
  onSendMessage: (message: Partial<Message>, email?: string) => Promise<void>;
  // onClickMailIcon: () => void;
  // isMailIconClicked: boolean;
  // handleSubmitCF: () => void;
  // isSubmittedCF: boolean;
  // hotelEmail: string;
  // hotelPhone: string;
  // shouldShowContactForm: boolean;
  // isLoading: boolean;
  // statusMessageCF: string;
  // handleSummarize: () => void;
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
  // let shouldShowCF: boolean = Boolean(shouldShowContactForm);

  // console.log('shouldShowCF: ', shouldShowCF);
  return (
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
              disabled={isDisabled || (shouldRequireEmail && !hasValidEmail)}
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
  );
};

export default ChatFooter;
