import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <Container>
      <OrangeCircle></OrangeCircle>
      <MidLightCircle></MidLightCircle>
      <LightCircle></LightCircle>
    </Container>
  );
};

const scaleAni = keyframes`
  0% {
    transform: scale(0.5);
  }
  30% {
    transform: scale(1.2);
  }
  60%{
    transform: scale(1.3);
  }
  100% {
    transform: scale(1.4);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const OrangeCircle = styled(Circle)`
  background-color: #ef6212;
  animation: ${scaleAni} 0.5s infinite linear alternate;
`;

const MidLightCircle = styled(Circle)`
  background-color: #ff7b30;
  animation: ${scaleAni} 0.5s 0.25s infinite linear alternate;
`;

const LightCircle = styled(Circle)`
  background-color: #ffa36e;
  animation: ${scaleAni} 0.5s 0.5s infinite linear alternate;
`;

export default Loading;
