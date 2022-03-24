import styled from 'styled-components';
import AppleLoginBtn from '../components/login/AppleLoginBtn';
import KaKaoLoginBtn from '../components/login/KaKaoLoginBtn';
import NaverLoginBtn from '../components/login/NaverLoginBtn';
import palette from '../styles/palette';
const login = () => {
  return (
    <Wrap>
      <ContentWrap>
        <Div className='content'>
          <PrevIcon
            viewBox='0 0 10 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M0.585938 7.6543C0.585938 7.87402 0.665039 8.06738 0.832031 8.23438L7.80176 15.0459C7.95117 15.2041 8.14453 15.2832 8.37305 15.2832C8.83008 15.2832 9.18164 14.9404 9.18164 14.4834C9.18164 14.2549 9.08496 14.0615 8.94434 13.9121L2.5459 7.6543L8.94434 1.39648C9.08496 1.24707 9.18164 1.04492 9.18164 0.825195C9.18164 0.368164 8.83008 0.0253906 8.37305 0.0253906C8.14453 0.0253906 7.95117 0.104492 7.80176 0.253906L0.832031 7.07422C0.665039 7.23242 0.585938 7.43457 0.585938 7.6543Z'
              fill='#696969'
            />
          </PrevIcon>
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
`;

const PrevIcon = styled.svg`
  width: 10px;
  height: 16px;
  margin: 20px 0 39px;
`;

// const Header = styled.div`
//   width: 100%;
//   // height: 10%;
//   border: 1px solid red;
//   margin-bottom: 39px;
// `;
const Title = styled.h2`
  font-size: 26px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-weight: 700;
  line-height: 36.4px;
  color: ${palette.black};
`;
const P = styled.p`
  color: ${palette.black};
  font-size: 17px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  margin-top: 30px;
`;
const Div = styled.div`
  &.content {
    width: 100%;
    height: 70%;
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
