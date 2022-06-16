import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import CompleteAlertModal from '../report/CompleteAlertModal';
//TODO 아무것도 안나옴

export default {
  title: 'mypage/컴포넌트',
  component: CompleteAlertModal,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CompleteAlertModal>;

export const CompleteAlertModalStory = () => <CompleteAlertModal />;

CompleteAlertModalStory.storyName = '완료 팝업';
