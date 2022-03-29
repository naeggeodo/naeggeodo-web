import React from 'react';
import styled from 'styled-components';
import { TabItem } from './types';

const TabButtonItem: React.FC<TabItem> = (props) => {
  return (
    <TabButton>
      <div>
        <img src={props.image} alt={props.altText} />
        <p>{props.title}</p>
      </div>
    </TabButton>
  );
};

const TabButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:nth-of-type(-n + 4) > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 45px;

    & > img {
      height: 20px;
    }
  }

  &:last-child > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 45px;
    & > img {
      height: 5px;
      transform: translateY(200%);
    }
  }
`;

export default TabButtonItem;
