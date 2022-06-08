import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const CustomerServiceSection = () => {
  return (
    <Container>
      <SectionTitle>고객센터</SectionTitle>
      <Link
        passHref
        href='https://fog-cowl-888.notion.site/63ad9843bb874e5797cff765419f47d7'>
        <StyledLink rel='noreferrer noopener' target='_blank'>
          <Image
            src='/assets/images/doc.svg'
            width={17}
            height={20}
            alt='메뉴 아이콘'
          />
          <span>공지사항</span>
        </StyledLink>
      </Link>

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
        신고하기
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
  margin-bottom: 10px;
  color: ${palette.TextGray};
  font-family: 'SpoqaBold';
  font-size: 0.9375rem;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;

  color: ${palette.black};
  font-size: 0.9375rem;
  padding: 15px;

  text-decoration: none;

  &:hover {
    background-color: ${palette.bgGray};
  }
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

  &:hover {
    background-color: ${palette.bgGray};
  }
`;

export default CustomerServiceSection;
