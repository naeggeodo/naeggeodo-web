import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import { TabItem } from './types';

type styledType = {
  active?: boolean;
};

const TabButtonItem: React.FC<TabItem> = (props) => {
  const router = useRouter();
  return (
    <Link href={props.link} passHref>
      <TabButton active={router.pathname === props.link ? true : false}>
        <div>
          <Image
            src={props.image}
            alt={props.altText}
            width={20}
            height={20}
            style={router.pathname === props.link && { filter: 'invert(1)' }}
          />
          {props.title}
        </div>
      </TabButton>
    </Link>
  );
};

const TabButton = styled.a<styledType>`
  background-color: transparent;
  cursor: pointer;
  color: ${(props) => (props.active ? '#000' : palette.LineGray)};
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
