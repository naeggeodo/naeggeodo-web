import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useKakaoLogin } from '../../../../hooks/useKakaoLogin';
import palette from '../../../../styles/palette';

const kakao = () => {
  const { isLoading, router } = useKakaoLogin();

  return (
    <Container isLoading={isLoading}>
      {isLoading && <Spinner></Spinner>}
    </Container>
  );
};

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const Container = styled.div<{ isLoading: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.isLoading ? 'rgba(0,0,0,0.8)' : '#ffffff'};
  height: 100vh;
`;

const Spinner = styled.div`
  height: 100px;
  width: 100px;
  border: 3px solid ${palette.mainOrange};
  border-radius: 50%;

  border-top: none;
  border-right: none;

  animation: ${rotation} 1s linear infinite;
`;

export default kakao;
