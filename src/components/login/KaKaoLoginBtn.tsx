import styled from 'styled-components';
import palette from '../../styles/palette';
import kakaologo from '../../assets/icons/kakaologo.svg';
import Image from 'next/image';

const KaKaoLoginBtn = () => {
  return (
    <Wrap>
      <Image src={kakaologo} alt='kakao logo' width={17.5} height={16.25} />
      <span>카카오 계정으로 로그인</span>
    </Wrap>
  );
};

export default KaKaoLoginBtn;
const Wrap = styled.button`
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
  font-family: 'Spoqa';
  font-size: 17px;
  margin-bottom: 6px;
  cursor: pointer;
  margin-bottom: 10px;
  gap: 6px;
`;
