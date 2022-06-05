import React from 'react';
import styled from 'styled-components';
import Loading from '../../../../components/common/Loading';

const naver = () => {
  return (
    <Wrap>
      <Loading />
    </Wrap>
  );
};

export default naver;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;
