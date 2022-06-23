import { ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { configureStore } from "../../../modules";
import ChatDrawer from "../ChatDrawer";

type Args = {
  exit: null;
  setIsDrawerOpen: null;
  isDrawerOpen: boolean;
  currentCount: number;
  masterId: string;
  stompClient: null;
};

export default {
  title: "chatting/컴포넌트",
  component: ChatDrawer,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ChatDrawer>;

const ChatDrawerStory = (args: Args) => (
  <ChatDrawer
    setIsDrawerOpen={() => {
      console.log("test");
    }}
    isDrawerOpen={true}
    currentCount={1}
    masterId="abcdefghi"
    {...args}
  />
);
export const ChatDrawerComp = ChatDrawerStory.bind({});

ChatDrawerComp.args = {
  isDrawerOpen: true,
};

ChatDrawerComp.storyName = "채팅 서랍";
