import React from 'react';
import styled from 'styled-components';
import Portal from '../common/Portal';
import ExitModalBox from './ExitModalBox';

const ExitModalTemplate = ({ exit }: { exit: any }) => {
  return (
    <Portal selector='loginPortal'>
      <Background>
        <ExitModalBox exit={exit} />
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

export default ExitModalTemplate;
