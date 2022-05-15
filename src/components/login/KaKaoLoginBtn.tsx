import styled from 'styled-components';
import Image from 'next/image';
import palette from '../../styles/palette';

const KaKaoLoginBtn = () => {
  return (
    <Button>
      <Image
        src='/assets/images/kakaologo.svg'
        alt='kakao logo'
        width={17.5}
        height={16.25}
      />
      <span>카카오 계정으로 로그인</span>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  width: 100%;
  height: 28%;

  font-size: 1.0625rem;
  color: #000;
  background-color: ${palette.kakaoYellow};

  margin-bottom: 10px;

  border-radius: 10px;
  border: none;
  cursor: pointer;
  outline: none;
`;

export default KaKaoLoginBtn;
