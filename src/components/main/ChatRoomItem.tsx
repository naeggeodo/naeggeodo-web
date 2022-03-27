import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import arrowright from '../../assets/icons/arrowright.svg';
import palette from '../../styles/palette';

const ChatRoomItem = () => {
  return (
    <Container>
      <StyledImage src='/buger.png' width={70} height={70} />
      <FlexRight>
        <Title>버거킹 백석 이마트점</Title>
        <NumberOfPeople>인원 1명 / 2명</NumberOfPeople>

        <TimeOrderLinkContainer>
          <RegisteredTime>34분 전</RegisteredTime>
          <div>
            <Link href='/login'>
              <StyledLink>
                <p>함께 주문하기</p>
                <img src={arrowright} alt='더보기 화살표' />
              </StyledLink>
            </Link>
          </div>
        </TimeOrderLinkContainer>
      </FlexRight>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  padding: 20px 14px;
  border-bottom: 1px solid ${palette.bgGray};
  background-color: #ffffff;
`;

const StyledImage = styled(Image)`
  border-radius: 10px;
  border: 1px solid ${palette.LineGray};
  background-color: red;
`;

const FlexRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

const Title = styled.p`
  font-size: 15px;
  color: ${palette.black};
`;

const NumberOfPeople = styled.p`
  color: ${palette.DarkGray};
  font-size: 12px;
`;

const RegisteredTime = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.DarkGray};
  background-color: ${palette.LightGray};
  font-size: 12px;
  width: 48px;
  height: 20px;
  border-radius: 3px;
`;

const TimeOrderLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 4px;

  & > p {
    font-size: 12px;
    color: ${palette.black};
  }
`;

export default ChatRoomItem;
