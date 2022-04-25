import styled from 'styled-components';
import palette from '../../styles/palette';
import Image from 'next/image';
import { useRef } from 'react';

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

export default NaverLoginBtn;

const Button = styled.button`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 10px;
  height: 28%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${palette.naverGreen};
  cursor: pointer;
  font-size: 17px;
  margin-bottom: 10px;
  gap: 6px;
`;
