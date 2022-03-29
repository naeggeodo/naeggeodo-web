import NaverLoginBtn from '../NaverLoginBtn';

export default {
  title: 'login/컴포넌트',
  component: NaverLoginBtn,
  decorators: [
    () => (
      <div style={{ height: '180px' }}>
        <NaverLoginBtn />
      </div>
    ),
  ],
};

export const NaverLogin = () => <NaverLoginBtn />;
NaverLogin.storyName = '네이버 로그인 버튼';
