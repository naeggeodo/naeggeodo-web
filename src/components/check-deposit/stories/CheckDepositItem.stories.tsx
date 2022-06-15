import { ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '../../../modules';
import { RemittanceState } from '../../../modules/common/types';
import CheckDepositItem from '../CheckDepositItem';
// TODO
// type Args = {
//   user: {
//     user_id: string;
//     idx: number;
//     remittanceState: RemittanceState;
//   };
// };

// export default {
//   title: 'check-deposit/컴포넌트',
//   component: CheckDepositItem,
//   parameters: {
//     layout: 'fullscreen',
//   },
//   decorators: [
//     (Story) => (
//       <Provider store={configureStore()}>
//         <Story />
//       </Provider>
//     ),
//   ],
// } as ComponentMeta<typeof CheckDepositItem>;

// const CheckDepositItemStory = (args: Args) => <CheckDepositItem {...args} />;

// export const CheckDepositItemComp = CheckDepositItemStory.bind({});

// CheckDepositItemComp.args = {
//   user: {
//     user_id: '신길동 호랑이',
//     idx: 1,
//     remittanceState: 'N',
//   },
// };

// CheckDepositItemComp.storyName = '수령 페이지 아이템';
