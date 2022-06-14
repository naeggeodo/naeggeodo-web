import React from 'react';
import ChatItem from '../chatting/ChatItem';
import MyChatItem from '../chatting/MyChatItem';
import DateFormatter from '../../utils/DateFormatter';
import { useSelectLoginStates } from '../../hooks/select/useSelectLoginStates';
import { ChattingListItem } from '../../modules/chatting/types';
import WelcomeMessage from './WelcomeMessage';

const ChattingList = ({ messageList }: { messageList: ChattingListItem[] }) => {
  const { user_id } = useSelectLoginStates();

  return (
    <>
      {messageList &&
        messageList.length > 0 &&
        messageList.map((message, i) => {
          if (message.type === 'WELCOME')
            return <WelcomeMessage message={message} />;
          else if (message.user_id === user_id)
            return (
              <MyChatItem
                key={i}
                message={message}
                date={
                  message.regDate ? message.regDate : DateFormatter.getNowDate()
                }
              />
            );
          else
            return (
              <ChatItem
                key={i}
                message={message}
                date={
                  message.regDate ? message.regDate : DateFormatter.getNowDate()
                }
              />
            );
        })}
    </>
  );
};

export default ChattingList;
