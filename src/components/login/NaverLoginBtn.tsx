import Image from 'next/image';
import { useRef } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const NaverLoginBtn = () => {
  const naverRef = useRef(null);

  const handleClick = () => {
    naverRef.current.children[0].click();
  };

  return (
    <>
      <div ref={naverRef} id='naverIdLogin' style={{ display: 'none' }}></div>
      <Button onClick={handleClick}>
        <Image
          src='/assets/images/naverlogo.svg'
          alt='naver logo'
          width={14}
          height={14}
        />
        <span>네이버 계정으로 로그인</span>
      </Button>
    </>
  );
};

const Button = styled.button`
  width: 100%;
  height: 28%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  border: none;
  outline: none;
  border-radius: 10px;
  color: #fff;
  background: ${palette.naverGreen};
  cursor: pointer;
  font-size: 1.0625rem;
  margin-bottom: 10px;
`;

export default NaverLoginBtn;
