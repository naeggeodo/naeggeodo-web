import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';

import { configureStore } from '../../../modules';
import ConvertToCompletedButton from '../ConvertToCompletedButton';
// TODO
// const store = {
//   getState: () => {
//     return {
//       loginState: {
//         accessToken: 'sampleToken',
//       },
//       chattingRoomState: {
//         chatRoomInfo: {
//           imgPath: '/assets/images/hamburger.svg',
//           link: 'string',
//           title: '햄버거 먹을분',
//           maxCount: 3,
//           currentCount: 1,
//           chatUser: ['호랑이'],
//           endDate: '2021-04-19T14:02:18.809Z',
//           id: 1,
//           state: 'string',
//           place: '아파트 1층',
//           address: '서울',
//           category: '치킨',
//           dealHistory: 'null',
//           user: '유저',
//           createDate: '2021-04-19T14:02:18.809Z',
//         },
//       },
//     };
//   },
//   subscribe: () => 0,
//   dispatch: action('dispatch'),
// };

export default {
  title: 'check-deposit/컴포넌트',
  component: ConvertToCompletedButton,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Provider store={configureStore()}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof ConvertToCompletedButton>;

const Template = (args) => <ConvertToCompletedButton {...args} />;

export const ConvertCompletion = Template.bind({});

ConvertCompletion.storyName = '완료된 거래로 전환하기 버튼';

// ConvertCompletion.loaders = [
//   async () => {
//     wrapper.getServerSideProps((store) => async (context) => {
//       const data = {
//         address: '메세나폴리스',
//         endDate: null,
//         buildingCode: '010212',
//         link: 'www',
//         orderTimeType: 'FREEDOM',
//         title: '교촌먹을분',
//         maxCount: 4,
//         tags: ['치킨'],
//         bookmarks: 'Y',
//         user_id: 'dahye',
//         imgPath: '/assets/images/hamburger.svg',
//         currentCount: 2,
//         bookmarkDate: '2021-04-19T14:02:18.809Z',
//         id: 1,
//         state: 'END',
//         place: '메세나폴리스 1층',
//         category: '치킨',
//         createDate: '2021-04-19T14:02:18.809Z',
//       };

//       store.dispatch(getCurrentChatRoomAsyncActions.success(data));
//       store.dispatch(END);
//       await store.sagaTask.toPromise();

//       return {
//         props: {
//           chatRoomInfo: store.getState().chattingRoomState.chatRoomInfo,
//         },
//       };
//     });
//   },
// ];
