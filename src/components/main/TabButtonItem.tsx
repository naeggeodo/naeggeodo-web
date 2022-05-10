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
  const routerFirstPath: string = router.pathname
    .split('/')
    .slice(0, 2)
    .join('/');
  return (
    <Link href={props.link} passHref>
      <TabButton active={routerFirstPath === props.link ? true : false}>
        <div>
          <Image
            src={props.image}
            alt={props.altText}
            width={20}
            height={20}
            style={routerFirstPath === props.link && { filter: 'invert(1)' }}
          />
          {props.title}
        </div>
      </TabButton>
    </Link>
  );
};

const TabButton = styled.a<styledType>`
  display: flex;
  align-items: center;

  font-size: 0.875rem;
  color: ${(props) => (props.active ? '#000' : palette.LineGray)};

  text-decoration: none;
  background-color: transparent;
  cursor: pointer;

  & > div {
    height: 45px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
export default TabButtonItem;
