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
  // const identifer = isBot ? defaultBotName : null;

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
        />
      </Flex>
      {shouldDisplayTimestamp && (
        <Flex m={1} sx={{justifyContent: 'flex-start'}}>
          <Text sx={{color: 'gray'}}>Sent {timestamp}</Text>
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
