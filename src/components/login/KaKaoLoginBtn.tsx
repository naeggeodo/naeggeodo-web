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
  width: 100%;
  height: 28%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  border: none;
  border-radius: 10px;
  outline: none;
  color: #000;
  background: ${palette.kakaoYellow};
  font-size: 1.0625rem;
  cursor: pointer;
  margin-bottom: 10px;
`;

export default KaKaoLoginBtn;
