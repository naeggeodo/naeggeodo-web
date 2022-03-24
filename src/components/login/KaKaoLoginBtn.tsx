import styled from 'styled-components';
import Image from 'next/image';
import palette from '../../styles/palette';
import KaKaologo from '../../assets/icons/kakaologo.svg';

const KaKaoLoginBtn = () => {
  return (
    <Wrap>
      <Image src={KaKaologo} alt='kakao logo' />
      <Span>카카오 계정으로 로그인</Span>
    </Wrap>
  );
};

export default KaKaoLoginBtn;
const Wrap = styled.div`
  width: 100%;
  border-radius: 10px;
  height: 28%;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${palette.kakaoYellow};
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-size: 17px;
  margin-bottom: 6px;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Span = styled.span`
  margin-left: 6px;
`;
