import { ComponentMeta } from '@storybook/react';
import CheckDepositItem from '../CheckDepositItem';

type Props = {
  userNickName: string;
};

export default {
  title: 'check-deposit/컴포넌트',
  component: CheckDepositItem,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CheckDepositItem>;

// const Template = (args: Props) => <CheckDepositItem {...args} />;

// export const CompleteButton = Template.bind({});

// CompleteButton.args = {
//   userNickName: '신길동 호랑이',
// };

// CompleteButton.storyName = '수령 완료 버튼';
