import styled from 'styled-components';
import AppleLoginBtn from '../components/login/AppleLoginBtn';
import KaKaoLoginBtn from '../components/login/KaKaoLoginBtn';
import NaverLoginBtn from '../components/login/NaverLoginBtn';
import palette from '../styles/palette';
import prevbtn from '../assets/icons/prevbtn.svg';
const login = () => {
  return (
    <Wrap>
      <ContentWrap>
        <Div className='header'>
          <img src={prevbtn} alt='prev button' />
        </Div>
        <Div className='content'>
          <Title>로그인하여</Title>
          <Title>내꺼도의 모든 서비스를</Title>
          <Title>이용하세요.</Title>
          <P>우리동네 배달비 반값 플랫폼</P>
        </Div>
        <Div className='buttons'>
          <KaKaoLoginBtn />
          <NaverLoginBtn />
          <AppleLoginBtn />
        </Div>
      </ContentWrap>
    </Wrap>
  );
};

export default login;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;
const ContentWrap = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding-top: 10px;
`;

const Title = styled.h2`
  font-size: 26px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-weight: 700;
  line-height: 1.4em;
  color: ${palette.black};
`;
const P = styled.p`
  color: ${palette.black};
  font-size: 17px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  margin-top: 30px;
`;
const Div = styled.div`
  &.header {
    width: 100%;
    height: 10%;
  }
  &.content {
    width: 100%;
    height: 60%;
  }
  &.buttons {
    border-top: 1px solid ${palette.DarkGray};
    padding-top: 26px;
    position: relative;
    height: 30%;
    &::before {
      content: '간편 로그인';
      width: 100px;
      height: 12px;
      display: inline-block;
      text-align: center;
      background: #fff;
      position: absolute;
      top: -6px;
      left: 50%;
      font-size: 12px;
      transform: translateX(-50%);
    }
  }
`;
