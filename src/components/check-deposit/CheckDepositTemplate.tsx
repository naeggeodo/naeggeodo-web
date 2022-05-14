import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import palette from '../../styles/palette';
import responsive from '../../styles/responsive';

import CheckDepositItem from './CheckDepositItem';
import ConvertToCompletedButton from './ConvertToCompletedButton';

const CheckDepositTemplate = () => {
  return (
    <Container>
      <TitleContainer>
        <Image
          src='/assets/images/prevbtn.svg'
          width={11}
          height={24}
          layout='fixed'
        />
        <Title>돈을 받으셨나요?</Title>
        <p style={{ lineHeight: 1.5 }}>
          수정완료 버튼을 누르면
          <br />
          참여멤버의 안심번호를 확인할 수 있어요.
        </p>
        <Notice>수령체크 후 미수령으로 전환이 어렵습니다.</Notice>
      </TitleContainer>

      <div>
        <DepositUserList>
          <SmallTitle>아직 못받았어요.</SmallTitle>
          <CheckDepositItem userNickName='신길동 호랑이' />
          <CheckDepositItem userNickName='신길동 호랑이' />
        </DepositUserList>

        <DepositYetUsers>
          <SmallTitle>돈을 보낸 멤버들</SmallTitle>
          <CheckDepositItem userNickName='신길동 호랑이' />
          <CheckDepositItem userNickName='신길동 호랑이' />
        </DepositYetUsers>
        <ConvertToCompletedButton />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;

  width: 100%;
  height: 100vh;

  font-size: 1.0625rem;

  padding: 20px 30px;

  @media ${responsive.compact} {
    font-size: 0.9375rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.p`
  font-family: 'SpoqaBold';
  font-size: 1.625rem;
  color: ${palette.black};

  letter-spacing: 0.35px;
`;

const Notice = styled.p`
  color: ${palette.Gray};
`;

const DepositUserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DepositYetUsers = styled(DepositUserList)`
  margin-top: 39px;
`;

const SmallTitle = styled.p`
  font-weight: 500;
  font-size: 0.75rem;
  color: ${palette.DarkGray};
  text-align: center;
`;

export default CheckDepositTemplate;
