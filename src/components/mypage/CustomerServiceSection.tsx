import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const CustomerServiceSection = () => {
  return (
    <Container>
      <SectionTitle>고객센터</SectionTitle>
      <MenuItem>
        <Image
          src='/assets/images/doc.svg'
          width={17}
          height={20}
          alt='메뉴 아이콘'
        />
        공지사항
      </MenuItem>
      <MenuItem>
        <Image
          src='/assets/images/message.svg'
          width={20}
          height={20}
          alt='메뉴 아이콘'
        />
        건의하기
      </MenuItem>
      <MenuItem>
        <Image
          src='/assets/images/caution.svg'
          width={19}
          height={20}
          alt='메뉴 아이콘'
        />
        신고내역 확인
      </MenuItem>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 0 24px;

  background-color: #fff;
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

export default CustomerServiceSection;
