import React from 'react';
import styled from 'styled-components';
import Loading from '../../../../components/common/Loading';
import { useNaverLogin } from '../../../../hooks/useNaverLogin';

const naver = () => {
  useNaverLogin();

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
