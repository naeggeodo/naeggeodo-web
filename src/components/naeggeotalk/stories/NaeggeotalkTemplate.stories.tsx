import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import NaeggeotalkTemplate from '../NaeggeotalkTemplate';

export default {
  title: 'naeggeotalk/페이지',
  component: NaeggeotalkTemplate,
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
} as ComponentMeta<typeof NaeggeotalkTemplate>;

const Template = (args) => <NaeggeotalkTemplate {...args} />;
// export const NaeggeotalkStory = () => Template.bind({});

// NaeggeotalkStory.args = {
//   naeggeotalkList: {
//     chatRoom: [
//       {
//         buildingCode: 'string',
//         category: 'string',
//         createDate: 'string',
//         id: 1,
//         idx: 1,
//         imgPath: 'string',
//         maxCount: 1,
//         place: 'string',
//         state: 'string',
//         tags: 'string',
//         title: 'asdf',
//         user_id: 'string',
//       },
//     ],
//   },
// };

// NaeggeotalkStory.storyName = '내꺼톡 주문내역 탭 페이지';
