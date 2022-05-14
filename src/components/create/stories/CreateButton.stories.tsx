import { ComponentMeta } from '@storybook/react';
import CreateButton from '../CreateButton';

export default {
  title: 'create/컴포넌트',
  component: CreateButton,
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
} as ComponentMeta<typeof CreateButton>;

const CreateButtonStory = (args) => <CreateButton {...args} />;

export const CreateBtn = CreateButtonStory.bind({});

CreateBtn.args = {
  storeName: 'asf',
};

CreateBtn.storyName = '내꺼톡 생성 버튼';
