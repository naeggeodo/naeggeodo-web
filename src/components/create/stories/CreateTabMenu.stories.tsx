import { ComponentMeta } from '@storybook/react';
import CreateTabMenu from '../CreateTabMenu';

// TODO 암거도 안나옴
type Args = {
  isShowCreateForm: boolean;
  setIsShowCreateForm: null;
};

export default {
  title: 'create/컴포넌트',
  component: CreateTabMenu,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof CreateTabMenu>;

const Template = (args: Args) => <CreateTabMenu {...args} />;

export const CreateTabMenuStory = () => Template.bind({});

CreateTabMenuStory.args = {
  isShowCreateForm: false,
};

CreateTabMenuStory.storyName = '내꺼톡 생성 헤더 탭메뉴';
