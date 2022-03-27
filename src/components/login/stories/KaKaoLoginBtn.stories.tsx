import KaKaoLoginBtn from '../KaKaoLoginBtn';

export default {
  title: 'login/KaKaoLoginBtn',
  component: KaKaoLoginBtn,
  decorators: [
    () => (
      <div style={{ height: '180px' }}>
        <KaKaoLoginBtn />
      </div>
    ),
  ],
};

export const example = () => <KaKaoLoginBtn />;
