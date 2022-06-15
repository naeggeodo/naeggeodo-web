import { ComponentMeta } from '@storybook/react';
import { OrderTimeType } from '../../../modules/common/types';
import OrderTimeTypeButton from '../OrderTimeTypeButton';

type Args = {
  children: string;
  handleClick: null;
  isActive: boolean;
  dataValue: OrderTimeType;
};

export default {
  title: 'create/컴포넌트',
  component: OrderTimeTypeButton,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
        }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof OrderTimeTypeButton>;

const Template = (args: Args) => <OrderTimeTypeButton {...args} />;
export const TitleTextStory = Template.bind({});

TitleTextStory.args = {
  children: '1시간 이내',
  isActive: true,
  dataValue: 'ONE_HOUR',
};
TitleTextStory.storyName = '시간 선택 버튼';
