import React from 'react';
import styled from 'styled-components';
import Loading from '../../../../components/common/Loading';
import { useAuth } from '../../../../hooks/auth/useAuth';

const naver = () => {
  useAuth('naver');

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

export default naver;
