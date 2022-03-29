import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import arrowRight from '../../assets/icons/arrowright.svg';
import palette from '../../styles/palette';
import { ChatRoomItemProps } from './types';

const ChatRoomItem = ({
  title,
  total,
  numOfPeople,
  registerTime,
  chattingUrl,
}: ChatRoomItemProps) => {
  return (
    <Container>
      <StyledImage src='/buger.png' width={70} height={70} />
      <FlexRight>
        <Title>{title}</Title>
        <NumberOfPeople>
          인원 {numOfPeople}명 / {total}명
        </NumberOfPeople>

        <TimeOrderLinkContainer>
          <RegisteredTime>{registerTime}분 전</RegisteredTime>
          <div>
            <Link href={chattingUrl}>
              <StyledLink>
                <p>함께 주문하기</p>
                <Image
                  src={arrowRight}
                  alt='더보기 화살표'
                  width={14}
                  height={20}
                />
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
  background-color: #ffffff;
  border-bottom: 1px solid ${palette.bgGray};
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
  min-width: 40px;
  padding: 0 4px;
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
