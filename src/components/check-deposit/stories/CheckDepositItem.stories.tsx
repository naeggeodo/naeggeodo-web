import { ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { configureStore } from "../../../modules";
import { CurrentChatUser } from "../../../modules/chatting/types";
import CheckDepositItem from "../CheckDepositItem";

export default {
  title: "deposit/컴포넌트",
  component: CheckDepositItem,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof CheckDepositItem>;

const CheckDepositItemStory = (args: { user: CurrentChatUser }) => (
  <CheckDepositItem {...args} />
);

export const CheckDepositItemComp = CheckDepositItemStory.bind({});

CheckDepositItemComp.args = {
  user: {
    user_id: "신길동 호랑이",
    idx: 1,
    remittanceState: "N",
    nickname: "신길동 호랑이",
  },
};

CheckDepositItemComp.storyName = "수령 페이지 아이템";
