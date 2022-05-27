import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { ChatRoomItemProps } from '../../modules/main/types';
import palette from '../../styles/palette';
import TimeCalculator from '../../utils/TimeCalculator';

const ChatRoomItem = ({
  title,
  maxCount,
  createDate,
  currentCount,
}: ChatRoomItemProps) => {
  const timeCalculator = new TimeCalculator(createDate);

  return (
    <Container>
      <StyledImage src='/assets/images/pizza.svg' width={70} height={70} />
      <FlexRight>
        <Title>{title}</Title>
        <NumberOfPeople>
          인원 {currentCount}명 / {maxCount}명
        </NumberOfPeople>

        <TimeOrderLinkContainer>
          <RegisteredTime>
            {timeCalculator.calculateCreateMinute()}
          </RegisteredTime>
          <div>
            <Link href='/' passHref>
              <StyledLink>
                <span>함께 주문하기</span>
                <Image
                  src='/assets/images/arrowright.svg'
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
  align-items: center;
  gap: 10px;

  width: 100%;

  padding: 20px 14px;

  background-color: #ffffff;

  border-bottom: 1px solid ${palette.bgGray};
`;

const StyledImage = styled(Image)`
  border: 1px solid ${palette.LineGray};
  border-radius: 10px;
`;

const FlexRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
`;

const Title = styled.p`
  font-size: 0.9375rem;
  color: ${palette.black};
`;

const NumberOfPeople = styled.p`
  font-size: 0.75rem;
  color: ${palette.DarkGray};
`;

const RegisteredTime = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 40px;
  height: 20px;

  font-size: 0.75rem;
  color: ${palette.DarkGray};

  background-color: ${palette.LightGray};

  padding: 0 4px;
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
  gap: 4px;

  text-decoration: none;
  cursor: pointer;

  & > span {
    font-size: 0.75rem;
    color: ${palette.black};
  }
`;

export default ChatRoomItem;
