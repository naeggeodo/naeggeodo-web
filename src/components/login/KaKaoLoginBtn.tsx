import styled from 'styled-components';
import Image from 'next/image';
import palette from '../../styles/palette';
import Link from 'next/link';

const KaKaoLoginBtn = () => {
  const CLIENT_ID = '97fb8027ff91de67e7c7bad120325b18';
  const REDIRECT_URI = 'http://localhost:8080/oauth/getInfo/kakao';

  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_API_URL}/login/OAuth/kakao`}
      passHref>
      <KaKaoLoginButton>
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
