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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  width: 100%;
  height: 28%;

  font-size: 1.0625rem;
  color: #fff;
  background-color: #000;

  margin-bottom: 10px;

  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default AppleLoginBtn;
