import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { configureStore, RootState } from '../../../modules';
import QuickMessageComp from '../QuickMessageComp';

// const socket = new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/chat`);
// const stompClient = Stomp.over(socket);

export default {
  title: 'chatting/컴포넌트',
  component: QuickMessageComp,
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <div style={{ height: '100vh', width: '100vw' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof QuickMessageComp>;

export const QuickMessageList = () => <QuickMessageComp />;
QuickMessageList.storyName = '빠른 메시지 전송';
