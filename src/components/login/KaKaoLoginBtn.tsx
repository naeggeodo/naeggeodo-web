import styled from 'styled-components';
import palette from '../../styles/palette';
import kakaologo from '../../assets/icons/kakaologo.svg';

const KaKaoLoginBtn = () => {
  return (
    <Wrap>
      <img src={kakaologo} alt='kakao logo' width={14} height={14} />
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
  font-family: 'Spoqa';
  font-size: 17px;
  margin-bottom: 6px;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Span = styled.span`
  margin-left: 6px;
`;
