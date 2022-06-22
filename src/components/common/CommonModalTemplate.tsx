import React from "react";
import styled from "styled-components";
import Portal from "./Portal";

const CommonModalTemplate = ({ children }: { children: JSX.Element }) => {
  return (
    <Portal selector="loginPortal">
      <Background>{children}</Background>
    </Portal>
  );
};

const Background = styled.div`
  position: fixed;
  top: 50p;
  bottom: 0;
  right: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.7);

  z-index: 1;

  overflow: hidden;
  touch-action: none;
`;

export default CommonModalTemplate;
