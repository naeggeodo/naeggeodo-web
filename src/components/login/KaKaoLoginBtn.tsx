import styled from 'styled-components';
import Image from 'next/image';
import palette from '../../styles/palette';
import Link from 'next/link';
import { SOCIAL_LOGIN } from '../../constant/Login';

const KaKaoLoginBtn = () => {
  return (
    <Link
      href={`https://kauth.kakao.com/oauth/authorize?client_id=${SOCIAL_LOGIN.KAKAO_CLIENT_ID}&redirect_uri=${SOCIAL_LOGIN.KAKAO_REDIRECT_URI}&response_type=code`}
      passHref>
      <KaKaoLoginButton rel='noreferrer noopener'>
        <Image
          src='/assets/images/kakaologo.svg'
          alt='kakao logo'
          width={17.5}
          height={16.25}
        />
        <span>카카오 계정으로 로그인</span>
      </KaKaoLoginButton>
    </Link>
  );
};

const KaKaoLoginButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  height: 52px;
  border-radius: 10px;

  background-color: ${palette.kakaoYellow};

  cursor: pointer;
  border-radius: 10px;
  border: none;
  outline: none;
  color: #000;
  text-decoration: none;

  & > span {
    font-size: 1.0625rem;
  }
`;

export default KaKaoLoginBtn;
