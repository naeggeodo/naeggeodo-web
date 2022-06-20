import Image from 'next/image';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const UserManagement = () => {
  const logOut = useCallback(() => {
    console.log('로그아웃 되었습니다.');
  }, []);

  return (
    <Container>
      <SectionTitle>회원 정보</SectionTitle>
      <MenuItem onClick={logOut}>
        <Image src="/assets/images/logouticon.svg" width={20} height={20} />
        로그아웃
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

const MenuItem = styled.button`
  display: flex;
  align-items: center;
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

export default UserManagement;
