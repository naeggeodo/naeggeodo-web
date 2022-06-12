import React from 'react';
import styled from 'styled-components';
import CopyCompleteModalBox from './CopyCompleteModalBox';
import Portal from './Portal';

const CopyCompleteModal = () => {
  return (
    <Portal selector='loginPortal'>
      <Background>
        <CopyCompleteModalBox />
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

export default CopyCompleteModal;
