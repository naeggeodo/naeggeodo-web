import React from 'react';
import styled from 'styled-components';
import Portal from '../../common/Portal';

const QuickChatModalTemplate = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <Portal selector='loginPortal'>
      <Background>
        <ModalContainer>{children}</ModalContainer>
      </Background>
    </Portal>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.7);

  z-index: 1;

  overflow: hidden;
  touch-action: none;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 5px;

  width: 90%;
  background: #fff;
  padding: 20px;
`;

export default QuickChatModalTemplate;
