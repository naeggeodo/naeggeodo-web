import React from 'react';
import styled from 'styled-components';
import Portal from '../common/Portal';
import LoginModalBox from './LoginModalBox';

const LoginModal: React.FC = () => {
  return (
    <Portal selector='loginPortal'>
      <Background />
      <LoginModalBox />
    </Portal>
  );
};

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  background-color: #000000;
  opacity: 0.7;

  z-index: 1;

  overflow: hidden;
  touch-action: none;
`;

export default LoginModal;
