import { ComponentMeta } from '@storybook/react';
import FieldTitle from '../createForm/FieldTitle';

export default {
  title: 'create/컴포넌트',
  component: FieldTitle,
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
          width: '100vw',
          height: '100vh',
        }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof FieldTitle>;

const Template = (args) => <FieldTitle {...args} />;

export const FieldTitleStory = Template.bind({});

FieldTitleStory.args = {
  title: '안녕',
};

FieldTitleStory.storyName = '내꺼톡 생성폼 필드';
