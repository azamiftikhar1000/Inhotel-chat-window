import React from 'react';
import {Box, Flex, Text} from 'theme-ui';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import BotIcon from './BotIcon';
import ChatMessageBody from './ChatMessageBody';
import {Message, User} from '../helpers/types';

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
  const handleThumbsUpClick = () => {
    console.log('Thumbs up clicked!');
    // send a feedback signal to your backend
  };
  const handleThumbsDownClick = () => {
    console.log('Thumbs down clicked!');
    // send a feedback signal to your backend
  };
  const thumbsup = (
    <button
      style={{cursor: 'pointer', margin: '4px'}}
      onClick={handleThumbsUpClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
      >
        <path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.1s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"></path>
      </svg>
    </button>
  );
  const thumbsdown = (
    <button
      style={{cursor: 'pointer', margin: '4px'}}
      onClick={handleThumbsDownClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
      >
        <path d="M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16H286.5c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8H384c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H32z"></path>
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
