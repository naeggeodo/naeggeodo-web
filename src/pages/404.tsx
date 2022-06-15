import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { useCustomRouter } from '../hooks/utils/useCustomRouter';
import palette from '../styles/palette';

const NotFound = () => {
  const { routeBack, routeReload } = useCustomRouter();

  return (
    <Container>
      <Contents>
        <StyledNotFound>404</StyledNotFound>
        <Text>
          죄송합니다.
          <br />
          페이지를 찾을수 없습니다.
        </Text>
        <SubText>
          요청하신 페이지가 사라졌거나,
          <br />
          잘못된 경로를 이용하셨습니다.
        </SubText>

        <ButtonContainer>
          <Button onClick={routeBack}>
            <Image src='/assets/images/prevbtn.svg' width={11} height={10} />
            <span>뒤로가기</span>
          </Button>
          <Button onClick={routeReload}>
            <Image src='/assets/images/reload.svg' width={11} height={16} />
            <span>새로고침</span>
          </Button>
        </ButtonContainer>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledNotFound = styled.div`
  font-family: 'SpoqaBold';
  font-size: 2.5rem;
  color: ${palette.mainOrange};

  text-align: center;
`;

const Text = styled.p`
  text-align: center;
  line-height: 1.3;

  font-family: 'SpoqaBold';
  font-size: 1.625rem;
  color: ${palette.mainOrange};
`;

const SubText = styled(Text)`
  font-family: 'Spoqa';
  font-size: 0.9375rem;
  color: #111111;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  font-size: 0.9375rem;
  color: ${palette.black};
  margin-top: 10px;
`;

const Button = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: 5px;

  background-color: ${palette.LightGray2};
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;

export default NotFound;
