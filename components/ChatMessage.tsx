import React, {useState} from 'react';
import {Box, Flex, Text} from 'theme-ui';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import BotIcon from './BotIcon';
import ChatMessageBody from './ChatMessageBody';
import {Message, User} from '../helpers/types';
import styles from './ChatMessage.module.css';

dayjs.extend(utc);

const formatRelativeTime = (date: dayjs.Dayjs) => {
  const ms = dayjs().diff(date, 'second');
  const mins = Math.floor(ms / 60);
  const hrs = Math.floor(mins / 60);
  const days = Math.floor(hrs / 24);

  if (ms < 10) {
    return 'just now';
  } else if (ms < 60) {
    return `${ms} seconds ago`;
  } else if (mins <= 60) {
    return `${mins} minute${mins === 1 ? '' : 's'} ago`;
  } else if (hrs <= 24) {
    return `${hrs} hour${hrs === 1 ? '' : 's'} ago`;
  } else {
    return `${days} day${days === 1 ? '' : 's'} ago`;
  }
};

const getAgentIdentifier = (user?: User) => {
  if (!user) {
    return 'Agent';
  }

  const {display_name, full_name, email} = user;
  const [username] = email.split('@');

  return display_name || full_name || username || 'Agent';
};

const SenderAvatar = ({
  name,
  user,
  isBot,
}: {
  name: string;
  user?: User;
  isBot?: boolean;
}) => {
  if (!isBot) {
    // Transparent
    // user.profile_photo_url =
    //   'https://uploads-ssl.webflow.com/657ae60d92ed823479730a3f/65c81fa5c254bb0f9763ce5f_guest-relations-assistant-avatar-64x64-transparent.png';
    // Black
    user.profile_photo_url =
      'https://uploads-ssl.webflow.com/657ae60d92ed823479730a3f/65c81fd78f53ab369e2e65d1_guest-relations-assistant-avatar-64x64-black.png';
    // White
    // user.profile_photo_url =
    //   'https://uploads-ssl.webflow.com/657ae60d92ed823479730a3f/65c81fcb8e01ed41a967bd37_guest-relations-assistant-avatar-64x64-white.png'
  }

  const profilePhotoUrl = user && user.profile_photo_url;

  if (profilePhotoUrl) {
    return (
      <Box
        mr={2}
        style={{
          height: 32,
          width: 32,
          borderRadius: '50%',
          justifyContent: 'center',
          alignItems: 'center',

          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: `url(${profilePhotoUrl})`,
        }}
      />
    );
  }

  return (
    <Flex
      mr={2}
      sx={{
        bg: isBot ? 'lighter' : 'primary',
        height: 32,
        width: 32,
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      {isBot && name.toLowerCase() === 'bot' ? (
        <BotIcon fill="background" height={16} width={16} />
      ) : (
        name.slice(0, 1).toUpperCase()
      )}
    </Flex>
  );
};

type Props = {
  message: Message;
  isMe?: boolean;
  isLastInGroup?: boolean;
  companyName?: string;
  shouldDisplayTimestamp?: boolean;
};

const ChatMessage = ({
  message,
  isMe,
  companyName,
  isLastInGroup,
  shouldDisplayTimestamp,
}: Props) => {
  const {body, created_at, user, type, attachments = []} = message;
  const created = created_at ? dayjs.utc(created_at) : null;
  const timestamp = created ? formatRelativeTime(created) : null;
  const isBot = type === 'bot';
  const defaultBotName = companyName || 'Bot';
  const identifer = isBot ? defaultBotName : getAgentIdentifier(user);
  const [clicked, setIsClicked] = useState(null);

  const handleThumbsUpClick = () => {
    console.log('Thumbs up clicked!');
    // send a feedback signal to your backend-
    // Toggle isClicked state
    if (clicked === 'up') {
      setIsClicked(null);
    } else {
      setIsClicked('up');
    }
  };
  const handleThumbsDownClick = () => {
    console.log('Thumbs down clicked!');
    // send a feedback signal to your backend
    // Toggle isClicked state
    if (clicked === 'down') {
      setIsClicked(null);
    } else {
      setIsClicked('down');
    }
  };
  const thumbsup = (
    <button
      style={{cursor: 'pointer', margin: '4px'}}
      onClick={handleThumbsUpClick}
      className={clicked === 'up' ? styles.clicked : ''}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 32 32"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
      >
        <path d="M 16.6875 3 L 16.375 3.28125 L 9.59375 10 L 6 10 L 5 10 L 5 11 L 5 25 L 5 26 L 6 26 L 21.84375 26 C 23.252639 26 24.485512 25.002126 24.78125 23.625 L 26.9375 13.625 C 27.333399 11.778954 25.888338 10 24 10 L 18.25 10 L 18.4375 9.25 C 18.640625 9.0936816 18.769008 9.0260315 19.0625 8.625 C 19.532087 7.9833496 20 6.9925134 20 5.65625 C 20.001571 4.2300298 18.709921 3 17.09375 3 L 16.6875 3 z M 17.40625 5.09375 C 17.827534 5.175457 18.000339 5.3486297 18 5.65625 C 18 6.5589866 17.727163 7.1156504 17.46875 7.46875 C 17.210337 7.8218496 17.03125 7.90625 17.03125 7.90625 L 16.6875 8.09375 L 16.5625 8.5 L 15.96875 10.75 L 15.65625 12 L 16.9375 12 L 24 12 C 24.659662 12 25.106851 12.574796 24.96875 13.21875 L 22.84375 23.21875 C 22.743488 23.685624 22.320861 24 21.84375 24 L 11 24 L 11 11.40625 L 17.40625 5.09375 z M 7 12 L 9 12 L 9 24 L 7 24 L 7 12 z"></path>
      </svg>
    </button>
  );
  const thumbsdown = (
    <button
      style={{cursor: 'pointer', margin: '4px'}}
      onClick={handleThumbsDownClick}
      className={clicked === 'down' ? styles.clicked : ''}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 32 32"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
      >
        <path d="M 10.15625 6 C 8.747361 6 7.5144885 6.9978744 7.21875 8.375 L 5.0625 18.375 C 4.6666009 20.221046 6.111662 22 8 22 L 13.75 22 L 13.5625 22.75 C 13.359375 22.906318 13.230992 22.973969 12.9375 23.375 C 12.467913 24.01665 12 25.007487 12 26.34375 C 12 27.769371 13.290079 29 14.90625 29 L 15.3125 29 L 15.625 28.71875 L 22.40625 22 L 26 22 L 27 22 L 27 21 L 27 7 L 27 6 L 26 6 L 10.15625 6 z M 10.15625 8 L 21 8 L 21 20.59375 L 14.59375 26.90625 C 14.172301 26.82439 14 26.651843 14 26.34375 C 14 25.441013 14.272837 24.88435 14.53125 24.53125 C 14.789663 24.17815 14.96875 24.09375 14.96875 24.09375 L 15.3125 23.90625 L 15.4375 23.5 L 16.03125 21.25 L 16.34375 20 L 15.0625 20 L 8 20 C 7.340338 20 6.8931491 19.425204 7.03125 18.78125 L 9.15625 8.78125 C 9.2565115 8.3143756 9.679139 8 10.15625 8 z M 23 8 L 25 8 L 25 20 L 23 20 L 23 8 z"></path>
      </svg>
    </button>
  );

  if (isMe) {
    return (
      <Box pr={0} pl={4} pb={isLastInGroup ? 3 : 2}>
        <Flex sx={{justifyContent: 'flex-end'}}>
          <ChatMessageBody
            className="Text--white"
            sx={{
              color: 'background',
              bg: 'primary',
              whiteSpace: 'pre-wrap',
            }}
            content={body}
            attachments={attachments}
          />
        </Flex>
        {shouldDisplayTimestamp && (
          <Flex m={1} sx={{justifyContent: 'flex-end'}}>
            <Text sx={{color: 'gray'}}>
              {timestamp ? `Sent ${timestamp}` : 'Sending...'}
            </Text>
          </Flex>
        )}
      </Box>
    );
  }

  return (
    <Box pr={4} pl={0} pb={isLastInGroup ? 3 : 2}>
      <Flex sx={{justifyContent: 'flex-start', alignItems: 'center'}}>
        <SenderAvatar name={identifer} user={user} isBot={isBot} />

        <ChatMessageBody
          sx={{
            color: 'text',
            bg: 'rgb(245, 245, 245)',
            whiteSpace: 'pre-wrap',
          }}
          content={body}
          attachments={attachments}
          thumbsup={thumbsup}
          thumbsdown={thumbsdown}
        />
      </Flex>

      {shouldDisplayTimestamp && (
        <Flex m={1} sx={{justifyContent: 'flex-start'}}>
          <Text sx={{color: 'gray'}}> {timestamp}</Text>
        </Flex>
      )}
    </Box>
  );
};

export const PopupChatMessage = ({message}: Props) => {
  const {body, user, type} = message;
  const isBot = type === 'bot';
  const identifer = isBot ? 'Bot' : getAgentIdentifier(user);
  // const identifer = isBot ? 'Bot' : null;

  return (
    <Box pr={0} pl={0} pb={2}>
      <Flex
        sx={{justifyContent: 'flex-start', alignItems: 'center', width: '100%'}}
      >
        <SenderAvatar name={identifer} user={user} isBot={isBot} />

        <ChatMessageBody
          sx={{
            px: 3,
            py: 3,
            color: 'text',
            bg: 'background',
            whiteSpace: 'pre-wrap',
            flex: 1,
            border: '1px solid rgb(245, 245, 245)',
            boxShadow: 'rgba(35, 47, 53, 0.09) 0px 2px 8px 0px',
            maxWidth: '84%',
          }}
          content={body}
        />
      </Flex>
    </Box>
  );
};

export default ChatMessage;
