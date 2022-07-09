import Image from 'next/image';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Cookies } from 'react-cookie';

import palette from '../../styles/palette';
import { LoginService } from '../../service/api/login/LoginService';
import { useRouter } from 'next/router';

const UserManagement = () => {
  const router = useRouter();
  const logOut = useCallback(() => {
    (async () => {
      try {
        const cookies = new Cookies();
        const response = await LoginService.asyncPostLogout();
        if (response.status === 200) {
          cookies.remove('accessToken');
          cookies.remove('address');
          cookies.remove('user_id');
          cookies.remove('buildingCode');
          router.replace('/');
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Container>
      <SectionTitle>회원 정보</SectionTitle>
      <MenuItem onClick={logOut}>
        <Image
          src="/assets/images/logouticon.svg"
          width={20}
          height={20}
          alt="로그아웃 아이콘"
        />
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
  color: ${palette.black};

  text-align: left;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${palette.bgGray};
  }
`;

export default UserManagement;
