import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import CheckDepositItem from '../components/check-deposit/CheckDepositItem';
import ConvertToCompletedButton from '../components/check-deposit/ConvertToCompletedButton';

import prevBtn from '../assets/icons/prevbtn.svg';
import palette from '../styles/palette';
import responsive from '../styles/responsive';

const CheckDeposit = () => {
  return (
    <Container>
      <TitleContainer>
        <Image src={prevBtn} width={11} height={24} layout='fixed' />
        <Title>돈을 받으셨나요?</Title>
        <p style={{ lineHeight: 1.5 }}>
          수정완료 버튼을 누르면
          <br />
          참여멤버의 안심번호를 확인할 수 있어요.
        </p>
        <Notice>수령체크 후 미수령으로 전환이 어렵습니다.</Notice>
      </TitleContainer>

      <div style={{ marginTop: '195px' }}>
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
  width: 100%;
  font-size: 17px;
  padding: 20px 30px;

  @media ${responsive.compact} {
    font-size: 15px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.p`
  font-size: 26px;
  color: ${palette.black};
  font-family: 'SpoqaBold';
  font-weight: 700;
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
  font-size: 12px;
  font-weight: 500;
  color: ${palette.DarkGray};
  text-align: center;
`;

export default CheckDeposit;
