import styled from 'styled-components';
import palette from '../../styles/palette';
import naverlogo from '../../assets/icons/naverlogo.svg';
const NaverLoginBtn = () => {
  return (
    <Wrap>
      <img src={naverlogo} alt='naver logo' width={14} height={14} />
      <Span>네이버 계정으로 로그인</Span>
    </Wrap>
  );
};

export default NaverLoginBtn;
const Wrap = styled.div`
  width: 100%;
  border-radius: 10px;
  height: 28%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${palette.naverGreen};
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  cursor: pointer;
  font-size: 17px;
  margin-bottom: 10px;
`;
const Span = styled.span`
  margin-left: 6px;
`;
