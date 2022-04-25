import styled from 'styled-components';
import palette from '../../styles/palette';
import Image from 'next/image';

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

export default KaKaoLoginBtn;
const Button = styled.button`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 10px;
  height: 28%;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${palette.kakaoYellow};
  font-size: 17px;
  margin-bottom: 6px;
  cursor: pointer;
  margin-bottom: 10px;
  gap: 6px;
`;
