import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const Terms = () => {
  return (
    <Container>
      <Title>이용약관</Title>

      <Link
        passHref
        href="https://fog-cowl-888.notion.site/b7b93231fbff405084d0a043025189e8">
        <StyledLink target="_blank">
          <Image
            src="/assets/images/terms.svg"
            width={20}
            height={20}
            alt="메뉴 아이콘"
          />
          <span>이용약관</span>
        </StyledLink>
      </Link>
      <Link
        href="https://fog-cowl-888.notion.site/b976365add8f40ecac4a54a5b67d156d"
        passHref>
        <StyledLink target="_blank">
          <Image
            src="/assets/images/userinfo.svg"
            width={20}
            height={20}
            alt="메뉴 아이콘"
          />
          개인정보 처리방침
        </StyledLink>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 0 24px;
  background-color: #fff;
`;

const Title = styled.h3`
  color: ${palette.TextGray};
  font-family: 'SpoqaBold';
  font-size: 0.9375rem;
  margin-bottom: 10px;
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

export default Terms;
