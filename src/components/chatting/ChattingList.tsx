import React from 'react';
import ChatItem from '../chatting/ChatItem';
import MyChatItem from '../chatting/MyChatItem';
import { PreviousChattingItem } from '../../modules/chatting/types';
import DateFormatter from '../../utils/DateFormatter';
import { useSelectLoginStates } from '../../hooks/select/useSelectLoginStates';

const ChattingList = ({
  messageList,
}: {
  messageList: PreviousChattingItem[];
}) => {
  const { user_id } = useSelectLoginStates();

  return (
    <>
      {messageList &&
        messageList.length > 0 &&
        messageList.map((message, i) => {
          if (message.user_id === user_id)
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
