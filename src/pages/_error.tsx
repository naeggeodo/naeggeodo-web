import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { useCustomRouter } from '../hooks/utils/useCustomRouter';
import palette from '../styles/palette';

// production 모드에서 에러

const _error = () => {
  const { routeBack, routeReload } = useCustomRouter();

  return (
    <Container>
      <Contents>
        <StyledNotFound>500</StyledNotFound>
        <Text>
          죄송합니다.
          <br />
          네트워크 에러가 발생하였습니다.
        </Text>

        <ButtonContainer>
          <Button onClick={routeBack}>
            <Image src="/assets/images/prevbtn.svg" width={11} height={10} />
            <span>뒤로가기</span>
          </Button>
          <Button onClick={routeReload}>
            <Image src="/assets/images/reload.svg" width={11} height={16} />
            <span>새로고침</span>
          </Button>
        </ButtonContainer>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-color: #fff;
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

export default _error;
