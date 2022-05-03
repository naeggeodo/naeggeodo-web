import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { TabItem } from './types';

const TabButtonItem: React.FC<TabItem> = (props) => {
  return (
    <Link href={props.link} passHref>
      <TabButton>
        <div>
          <Image src={props.image} alt={props.altText} width={20} height={20} />
          {props.title}
        </div>
      </TabButton>
    </Link>
  );
};

const TabButton = styled.a`
  background-color: transparent;
  cursor: pointer;
  color: #000;
  text-decoration: none;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 45px;
  }
`;
export default TabButtonItem;
