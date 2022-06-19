import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../modules';
import Portal from '../../common/Portal';

type StyledType = {
  isActive: boolean;
};

const ConfirmAlertModalTemplate = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const { isModalAnimationStart } = useSelector(
    (state: RootState) => state.myPageState,
  );

  return (
    <Portal selector='reportPortal'>
      <Background isActive={isModalAnimationStart}>
        <ModalContainer>{children}</ModalContainer>
      </Background>
    </Portal>
  );
};

export default ConfirmAlertModalTemplate;

const Background = styled.div<StyledType>`
  position: fixed;
  top: 0;
  bottom: ${(props) => (props.isActive ? '-50px' : 0)};
  right: 0;
  left: 0;

  opacity: ${(props) => (props.isActive ? 0 : 1)};

  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  overflow: hidden;
  touch-action: none;

  transition: 0.5s;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 5px;

  width: 70%;
  background: #fff;
  padding: 30px;
`;
