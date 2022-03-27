import AppleLoginBtn from '../AppleLoginBtn';

export default {
  title: 'login/AppleLoginBtn',
  component: AppleLoginBtn,
  decorators: [
    () => (
      <div style={{ height: '180px' }}>
        <AppleLoginBtn />
      </div>
    ),
  ],
};

export const example = () => <AppleLoginBtn />;
