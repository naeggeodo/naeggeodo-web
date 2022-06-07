import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const Terms = () => {
  return (
    <Container>
      <SectionTitle>이용약관</SectionTitle>
      <MenuItem>
        <Image
          src='/assets/images/terms.svg'
          width={20}
          height={20}
          alt='메뉴 아이콘'
        />
        이용약관
      </MenuItem>
      <MenuItem>
        <Image
          src='/assets/images/userinfo.svg'
          width={20}
          height={20}
          alt='메뉴 아이콘'
        />
        개인정보 처리방침
      </MenuItem>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 0 24px;
`;

const SectionTitle = styled.h3`
  color: ${palette.TextGray};
  font-family: 'SpoqaBold';
  font-size: 0.9375rem;
`;

const MenuItem = styled.button`
  display: flex;
  gap: 12px;
  width: 100%;
  padding: 15px;
  font-size: 0.9375rem;
  background-color: #fff;

  text-align: left;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default Terms;
