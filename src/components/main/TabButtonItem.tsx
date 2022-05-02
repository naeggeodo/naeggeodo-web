import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { TabItem } from './types';

const TabButtonItem: React.FC<TabItem> = (props) => {
  return (
    <TabButton>
      <div>
        <Image src={props.image} alt={props.altText} width={20} height={20} />
        <p>{props.title}</p>
      </div>
    </TabButton>
  );
};

const TabButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 45px;
  }
`;

export default TabButtonItem;
