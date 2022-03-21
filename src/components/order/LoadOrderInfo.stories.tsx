import styled from 'styled-components';
import LoadOrderInfo from './LoadOrderInfo';

type Args = {
  children: string;
  pink: boolean;
};

export default {
  title: '내꺼도 생성 페이지',
  component: LoadOrderInfo,
};

const Template = (args: Args) => <LoadOrderInfo {...args} />;

export const LoadInfo = Template.bind({});

LoadInfo.args = {
  children: '과거 목록에서 불러오기',
  pink: false,
};
