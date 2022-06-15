import { ComponentMeta } from '@storybook/react';
import CreateButton from '../CreateButton';

type Args = {
  storeName: string;
  handleClick: null;
};

export default {
  title: 'create/컴포넌트',
  component: CreateButton,
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
        }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CreateButton>;

const Template = (args: Args) => (
  <CreateButton
    handleClick={() => {
      console.log(args);
    }}
    {...args}
  />
);
export const CreateButtonStory = Template.bind({});

CreateButtonStory.args = {
  storeName: '',
};

CreateButtonStory.args = {
  storeName: '교촌치킨',
};

CreateButtonStory.storyName = '내꺼톡 생성 버튼';
