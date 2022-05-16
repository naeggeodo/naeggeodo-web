import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const AppleLoginBtn = () => {
  return (
    <Link href='/'>
      <AppleLoginButton>
        <Image
          src='/assets/images/applelogo.svg'
          alt='apple logo'
          width={14}
          height={16}
        />
        <span>애플 계정으로 로그인</span>
      </AppleLoginButton>
    </Link>
  );
};

const AppleLoginButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  width: 100%;
  height: 52px;

  background-color: #000;

  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;

  & > span {
    font-size: 1.0625rem;
    color: #fff;
  }
`;

export default AppleLoginBtn;
