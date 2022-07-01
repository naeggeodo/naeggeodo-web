import ChatItem from "../chatting/ChatItem";
import MyChatItem from "../chatting/MyChatItem";
import { useSelectLoginStates } from "../../hooks/select/useSelectLoginStates";
import { ChattingListItem } from "../../modules/chatting/types";
import WelcomeMessage from "./WelcomeMessage";
import React from "react";
import MyChatImage from "./MyChatImage";
import ChatImage from "./ChatImage";

const ChattingList = ({ messageList }: { messageList: ChattingListItem[] }) => {
  const { user_id } = useSelectLoginStates();

  return (
    <React.Fragment>
      {messageList &&
        messageList.length > 0 &&
        messageList.map((message, i) => {
          if (message.type === "WELCOME" || message.type === "BAN")
            return (
              <WelcomeMessage key={message.contents + i} message={message} />
            );
          else if (message.type === "CNT") return null;
          else if (message.type === "EXIT")
            return (
              <WelcomeMessage key={message.contents + i} message={message} />
            );
          else if (message.user_id === user_id) {
            if (message.type === "TEXT")
              return (
                <MyChatItem
                  key={message.contents + i}
                  message={message}
                  date={message.regDate}
                />
              );
            if (
              message.type === "IMAGE" &&
              message.contents.includes("data:image/") &&
              message.contents.length >= 10000
            )
              return (
                <MyChatImage
                  key={message.contents + i}
                  message={message}
                  date={message.regDate}
                />
              );
          } else {
            if (message.type === "TEXT") {
              return (
                <ChatItem
                  key={message.contents + i}
                  message={message}
                  date={message.regDate}
                />
              );
            }
            if (
              message.type === "IMAGE" &&
              message.contents.includes("data:image/") &&
              message.contents.length >= 10000
            ) {
              return (
                <ChatImage
                  key={message.contents + i}
                  message={message}
                  date={message.regDate}
                />
              );
            }
          }
        })}
    </React.Fragment>
  );
};

export default ChattingList;
