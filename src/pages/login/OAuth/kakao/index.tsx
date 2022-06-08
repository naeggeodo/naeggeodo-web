import React from 'react';
import styled, { keyframes } from 'styled-components';
import Loading from '../../../../components/common/Loading';
import { useAuth } from '../../../../hooks/auth/useAuth';

const kakao = () => {
  useAuth('kakao');

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
