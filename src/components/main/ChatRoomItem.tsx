import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { ChatRoomItemProps } from '../../modules/main/types';
import palette from '../../styles/palette';
import { convertOrderTimeType } from '../../utils/convertOrderTimeType';
import TimeCalculator from '../../utils/TimeCalculator';
import RegisterTime from './RegisterTime';

const ChatRoomItem = ({
  id,
  title,
  maxCount,
  createDate,
  currentCount,
  orderTimeType,
  imgPath,
  address,
}: ChatRoomItemProps) => {
  const timeCalculator = useMemo(
    () => new TimeCalculator(createDate),
    [createDate],
  );
  const router = useRouter();

  return (
    <Container>
      <Image
        style={{ borderRadius: '10px' }}
        src={imgPath}
        width={70}
        height={70}
        alt={`${title} 이미지`}
      />
      <FlexRight>
        <Title>{title}</Title>
        <NumberOfPeople>
          인원 {currentCount}명 / {maxCount}명
        </NumberOfPeople>
        <TimeOrderLinkContainer>
          <OrderTimeTypeWrapper>
            <RegisterTime>
              {timeCalculator.calculateCreateMinute()}
            </RegisterTime>
            <p>{convertOrderTimeType(orderTimeType)}</p>
          </OrderTimeTypeWrapper>

          {router.route === '/chat-rooms' ? (
            <Link href={`/chatting/${id}`} passHref>
              <StyledLink rel="noreferrer noopener">
                <p>함께주문하기</p>
                <Image
                  src="/assets/images/arrowright.svg"
                  width={14}
                  height={14}
                  alt="채팅하러가기 버튼"
                />
              </StyledLink>
            </Link>
          ) : (
            <TitleContainer>
              <p>{address}</p>
            </TitleContainer>
          )}
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
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${palette.bgGray};
  }
`;

const FlexRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
`;

const TitleContainer = styled.div`
  font-size: 0.8125rem;
  color: ${palette.DarkGray};
`;

const Title = styled.p`
  font-size: 0.9375rem;
  color: ${palette.black};
`;

const NumberOfPeople = styled.p`
  font-size: 0.75rem;
  color: ${palette.DarkGray};
`;

const TimeOrderLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const OrderTimeTypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & > p:nth-child(2) {
    font-family: 'SpoqaBold';
    font-size: 0.75rem;
    color: ${palette.mainOrange};
    word-break: keep-all;
  }
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;

  text-decoration: none;
  cursor: pointer;

  & > p {
    font-size: 0.75rem;
    color: ${palette.black};
    word-break: keep-all;
  }

  &:hover {
    border-bottom: 1px solid black;
  }
`;

export default React.memo(ChatRoomItem);
