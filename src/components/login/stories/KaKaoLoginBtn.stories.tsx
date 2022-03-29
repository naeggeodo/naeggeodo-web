import KaKaoLoginBtn from '../KaKaoLoginBtn';

export default {
  title: 'login/컴포넌트',
  component: KaKaoLoginBtn,
  decorators: [
    () => (
      <div style={{ height: '180px' }}>
        <KaKaoLoginBtn />
      </div>
    ),
  ],
};

export const KaKaoLogin = () => <KaKaoLoginBtn />;
KaKaoLogin.storyName = '카카오 로그인 버튼';
