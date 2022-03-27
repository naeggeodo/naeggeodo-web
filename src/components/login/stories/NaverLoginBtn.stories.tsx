import NaverLoginBtn from '../NaverLoginBtn';

export default {
  title: 'login/NaverLoginBtn',
  component: NaverLoginBtn,
  decorators: [
    () => (
      <div style={{ height: '180px' }}>
        <NaverLoginBtn />
      </div>
    ),
  ],
};

export const example = () => <NaverLoginBtn />;
