import MainBtn from "./MainBtn";
type PropsType = {
  children: string;
};
export default {
  title: "버튼",
  component: MainBtn,
};
const Template = (args: PropsType) => <MainBtn {...args} />;
export const ButtonInfo = Template.bind({});
ButtonInfo.args = {
  children: "메인 버튼",
};
