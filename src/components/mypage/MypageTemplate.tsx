import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import TabMenu from '../main/TabMenu';
import CustomerServiceSection from './CustomerServiceSection';
import MypageUserInfo from './MypageUserInfo';
import Terms from './Terms';

const MypageTemplate = () => {
  return (
    <React.Fragment>
      <Container>
        <MypageUserInfo />
        <Bar />

        <CustomerServiceSection />

        <Terms />
      </Container>
      <TabMenu />
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #fff;
  padding: 46px 0 83px;
`;

const Bar = styled.div`
  height: 8px;
  margin-top: 20px;

  background-color: ${palette.LightGray2};
  opacity: 0.5;
`;

export default MypageTemplate;
