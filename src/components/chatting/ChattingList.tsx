import ChatItem from "../chatting/ChatItem";
import MyChatItem from "../chatting/MyChatItem";
import { useSelectLoginStates } from "../../hooks/select/useSelectLoginStates";
import { ChattingListItem } from "../../modules/chatting/types";
import WelcomeMessage from "./WelcomeMessage";
import React from "react";

const ChattingList = ({ messageList }: { messageList: ChattingListItem[] }) => {
  const { user_id } = useSelectLoginStates();

  return (
    <React.Fragment>
      {messageList &&
        messageList.length > 0 &&
        messageList.map((message, i) => {
          if (message.type === "WELCOME" || message.type === "BAN")
            return (
              <WelcomeMessage key={message.user_id + i} message={message} />
            );
          else if (message.type === "CNT") return null;
          else if (message.type === "EXIT")
            return (
              <WelcomeMessage key={message.user_id + i} message={message} />
            );
          else if (message.user_id === user_id)
            return (
              <MyChatItem
                key={message.user_id + i}
                message={message}
                date={message.regDate}
              />
            );
          else
            return (
              <ChatItem
                key={message.user_id + i}
                message={message}
                date={message.regDate}
              />
            );
        })}
    </React.Fragment>
  );
};

export default ChattingList;
