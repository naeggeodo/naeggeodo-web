import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import { tabDatas } from './data';
import TabButtonItem from './TabButtonItem';

const TabMenu = () => {
  return (
    <Container>
      {tabDatas.map((tab) => (
        <TabButtonItem
          key={tab.id}
          image={tab.image}
          title={tab.title}
          altText={tab.altText}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 55px;
  background-color: #ffffff;
  box-shadow: 0px -0.5px 0px #e0e0e0;
  backdrop-filter: blur(20px);
  border-radius: 20px 20px 0px 0px;
  border-top: 1px solid ${palette.LightGray};
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default TabMenu;
