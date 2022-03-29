import GoInfoBtn from '../GoInfoBtn';

export default {
  title: 'chatting/컴포넌트',
  component: GoInfoBtn,
  decorators: [
    () => (
      <div style={{ height: '100vh', width: '100vw' }}>
        <GoInfoBtn />
      </div>
    ),
  ],
};

export const GoInfo = () => <GoInfoBtn />;
GoInfo.storyName = '가게 정보 보러가기 버튼';
