import styled, { css } from 'styled-components';
import Image from 'next/image';
import AppleLoginBtn from '../login/AppleLoginBtn';
import KaKaoLoginBtn from '../login/KaKaoLoginBtn';
import NaverLoginBtn from '../login/NaverLoginBtn';
import palette from '../../styles/palette';

type StyledProps = {
  name: 'header' | 'content' | 'buttons';
};

const LoginTemplate = () => {
  return (
    <Wrap>
      <ContentWrap>
        <Div name='header'>
          <Image
            src='/assets/images/prevbtn.svg'
            alt='prev button'
            width={14}
            height={24}
          />
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

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;

const ContentWrap = styled.div`
  width: 90%;
  height: 100%;

  margin: 0 auto;
  padding-top: 10px;
`;

const Title = styled.h2`
  font-family: 'SpoqaBold';
  font-size: 1.625rem;
  color: ${palette.black};

  line-height: 1.4em;
`;

const P = styled.p`
  font-size: 1.0625rem;
  color: ${palette.black};
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
      position: relative;
      height: 30%;

      border-top: 1px solid ${palette.DarkGray};
      padding-top: 26px;

      &::before {
        content: '간편 로그인';

        display: inline-block;
        position: absolute;
        top: -6px;
        left: 50%;

        width: 100px;
        height: 12px;

        text-align: center;
        background-color: #fff;

        font-size: 0.75rem;

        transform: translateX(-50%);
      }
    `};
`;

export default LoginTemplate;
