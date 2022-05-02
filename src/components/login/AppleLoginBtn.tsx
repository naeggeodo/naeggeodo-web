import Image from 'next/image';
import styled from 'styled-components';

const AppleLoginBtn = () => {
  return (
    <Button>
      <Image
        src='/assets/images/applelogo.svg'
        alt='apple logo'
        width={14}
        height={16}
      />
      <span>애플 계정으로 로그인</span>
    </Button>
  );
};

const Button = styled.button`
  width: 100%;
  height: 28%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  border: none;
  outline: none;
  border-radius: 10px;
  background: #000;
  color: #fff;
  font-size: 1.0625rem;
  cursor: pointer;
  margin-bottom: 10px;
`;

export default AppleLoginBtn;
