import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { SOCIAL_LOGIN } from '../../constant/Login';
import palette from '../../styles/palette';

const NaverLoginBtn = () => {
  return (
    <Link
      href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${SOCIAL_LOGIN.NAVER_CLIENT_ID}&state=STATE&redirect_uri=${SOCIAL_LOGIN.NAVER_REDIRECT_URI}`}>
      <NaverLoginButton>
        <Image
          src='/assets/images/naverlogo.svg'
          alt='naver logo'
          width={14}
          height={14}
        />
        <span>네이버 계정으로 로그인</span>
      </NaverLoginButton>
    </Link>
  );
};

const NaverLoginButton = styled.span`
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

  & > span {
    font-size: 1.0625rem;
  }
`;

export default NaverLoginBtn;
