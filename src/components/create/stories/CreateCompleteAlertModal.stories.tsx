import { ComponentMeta } from '@storybook/react';
import CreateCompleteAlertModal from '../CreateCompleteAlertModal';

//TODO 글자가 안나옴

export default {
  title: 'create/컴포넌트',
  component: CreateCompleteAlertModal,
  decorators: [(Story) => <Story />],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CreateCompleteAlertModal>;

export const CreateCompleteAlertModalStory = () => <CreateCompleteAlertModal />;

CreateCompleteAlertModalStory.storyName = '생성완료 모달';
