import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const NaverLoginBtn = () => {
  const handleClick = () => {};

  return (
    <Link href='/'>
      <div>
        <Image
          src='/assets/images/naverlogo.svg'
          alt='naver logo'
          width={14}
          height={14}
        />
        <span>네이버 계정으로 로그인</span>
      </div>
    </Link>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  height: 52px;

  font-size: 1.0625rem;
  color: #fff;
  background-color: ${palette.naverGreen};

  cursor: pointer;
  border-radius: 10px;
  border: none;
  outline: none;
`;

export default NaverLoginBtn;
