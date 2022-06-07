import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';

const index = () => {
  const router = useRouter();
  return (
    <Container>
      <Title>
        우리동네
        <br />
        배달비 반값 플랫폼
        <br />
        <Strong>내꺼도</Strong> 같이
      </Title>

      <Description>
        지금 채팅방을 생성해서
        <br />
        같이먹을 사람을 모집해보세요
      </Description>

      <StartContainer>
        <MoveMainPageButton onClick={() => router.push('chatRooms')}>
          지금 둘러보기
        </MoveMainPageButton>
        <DownLoad>
          <DownLoadText>
            앱을 다운로드해서 더욱 편하게 <br />
            <OrangeText>내꺼도앱</OrangeText>을 즐겨보세요 🛵
          </DownLoadText>
          <ButtonContainer>
            <DownLoadButton>
              <Image
                src='/assets/images/appstore.svg'
                alt='내꺼도 앱스토어 다운로드'
                width={170}
                height={55}
              />
            </DownLoadButton>
            <DownLoadButton>
              <Image
                src='/assets/images/googleplay.png'
                alt='내꺼도 구글플레이 다운로드'
                width={200}
                height={80}
              />
            </DownLoadButton>
          </ButtonContainer>
        </DownLoad>
      </StartContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 88px 30px 0;
  height: 100vh;
`;

const Title = styled.h1`
  font-family: 'SpoqaBold';
  font-size: 1.625rem;
  color: ${palette.black};
  letter-spacing: 0.35px;
  line-height: 1.3;
`;

const Strong = styled.strong`
  color: ${palette.mainOrange};
`;

const Description = styled.p`
  line-height: 1.2;
  color: ${palette.DarkGray};
  margin-top: 30px;
`;

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
`;

const DownLoad = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 200px;
`;

const DownLoadText = styled.p`
  font-size: 1.125rem;
  line-height: 1.4;
`;

const OrangeText = styled.span`
  color: ${palette.mainOrange};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 50px;
`;

const MoveMainPageButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  width: 200px;
  height: 40px;

  color: #fff;
  background-color: ${palette.mainOrange};
  border-radius: 10px;
`;

const DownLoadButton = styled.button`
  all: unset;
  cursor: pointer;
`;

export default index;
