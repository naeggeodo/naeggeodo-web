import React from 'react';
import styled, { keyframes } from 'styled-components';
import Loading from '../../../../components/common/Loading';
import { useKakaoLogin } from '../../../../hooks/useKakaoLogin';
import palette from '../../../../styles/palette';

const kakao = () => {
  useKakaoLogin();

  return (
    <Container>
      <Loading />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default kakao;
