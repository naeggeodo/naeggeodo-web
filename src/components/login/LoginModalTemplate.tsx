import React from 'react';
import CommonModalTemplate from '../common/CommonModalTemplate';
import LoginModalBox from './LoginModalBox';

const LoginModal: React.FC = () => {
  return (
    <CommonModalTemplate>
      <LoginModalBox />
    </CommonModalTemplate>
  );
};

export default LoginModal;
