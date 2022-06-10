import React from 'react';
import ChatItem from '../chatting/ChatItem';
import MyChatItem from '../chatting/MyChatItem';
import { PreviousChattingItem } from '../../modules/chatting/types';
import DateFormatter from '../../utils/DateFormatter';

const ChattingList = ({
  messageList,
}: {
  messageList: PreviousChattingItem[];
}) => {
  console.log(DateFormatter.getNowDate());
  return (
    <>
      {messageList &&
        messageList.length > 0 &&
        messageList.map((message, i) => {
          if (message.user_id === '1')
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
