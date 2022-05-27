import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import CheckDepositItem from '../CheckDepositItem';

type Args = {
  user: {
    user_id: string;
    idx: number;
    remittanceState: 'N' | 'Y';
  };
};

export default {
  title: 'check-deposit/컴포넌트',
  component: CheckDepositItem,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof CheckDepositItem>;

const CheckDepositItemStory = (args: Args) => <CheckDepositItem {...args} />;

export const CheckDepositItemComp = CheckDepositItemStory.bind({});

CheckDepositItemComp.args = {
  user: {
    user_id: '신길동 호랑이',
    idx: 1,
    remittanceState: 'N',
  },
};

CheckDepositItemComp.storyName = '수령 페이지 아이템';
