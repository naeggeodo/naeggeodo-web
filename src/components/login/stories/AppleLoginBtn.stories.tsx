import AppleLoginBtn from '../AppleLoginBtn';

export default {
  title: 'login/컴포넌트',
  component: AppleLoginBtn,
  decorators: [
    () => (
      <div style={{ height: '180px' }}>
        <AppleLoginBtn />
      </div>
    ),
  ],
};

export const AppleLogin = () => <AppleLoginBtn />;

AppleLogin.storyName = '애플 로그인 버튼';
