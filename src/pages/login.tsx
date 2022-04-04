import styled, { css } from 'styled-components';
import AppleLoginBtn from '../components/login/AppleLoginBtn';
import KaKaoLoginBtn from '../components/login/KaKaoLoginBtn';
import NaverLoginBtn from '../components/login/NaverLoginBtn';
import palette from '../styles/palette';
import prevbtn from '../assets/icons/prevbtn.svg';
import Image from 'next/image';
type StyledProps = {
  name: 'header' | 'content' | 'buttons';
};
const login = () => {
  return (
    <Wrap>
      <ContentWrap>
        <Div name='header'>
          <Image src={prevbtn} alt='prev button' width={14} height={24} />
        </Div>
        <Div name='content'>
          <Title>로그인하여</Title>
          <Title>내꺼도의 모든 서비스를</Title>
          <Title>이용하세요.</Title>
          <P>우리동네 배달비 반값 플랫폼</P>
        </Div>
        <Div name='buttons'>
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
  background: #fff;
`;
const ContentWrap = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding-top: 10px;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  line-height: 1.4em;
  color: ${palette.black};
`;
const P = styled.p`
  color: ${palette.black};
  font-size: 17px;
  margin-top: 30px;
`;
const Div = styled.div<StyledProps>`
  width: 100%;
  ${(props) =>
    props.name === 'header' &&
    css`
      height: 10%;
    `};
  ${(props) =>
    props.name === 'content' &&
    css`
      height: 60%;
    `};
  ${(props) =>
    props.name === 'buttons' &&
    css`
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
    `};
`;
