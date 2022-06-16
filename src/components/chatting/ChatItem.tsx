import Image from 'next/image';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { ChattingListItem } from '../../modules/chatting/types';
import palette from '../../styles/palette';
import DateFormatter from '../../utils/DateFormatter';

const ChatItem = ({
  message,
  date,
}: {
  message: ChattingListItem;
  date?: string;
}) => {
  const chatDate = useMemo(() => new DateFormatter(date), [date]);
  const currentDate = new Date();
  const today = useMemo(
    () =>
      `${currentDate.getFullYear()}-${String(
        currentDate.getMonth() + 1,
      ).padStart(2, '0')}-${currentDate.getDate()}`,
    [currentDate],
  );

  return (
    <>
      <Nickname>{message.nickname}</Nickname>
      <Container>
        <StyledImage
          src='/assets/images/hamburger.svg'
          width={35}
          height={35}
          layout='fixed'
          alt='유저 프로필 사진'
        />
        {message.contents?.includes('data:image/') ? (
          <StyledImg
            src={message.contents}
            alt='채팅 이미지'
            width={150}
            height={150}
          />
        ) : (
          <Content>
            <div>{message.contents}</div>
          </Content>
        )}
        <Time>
          {today === chatDate.date ? null : (
            <span>{chatDate.formatDate()}</span>
          )}
          <span>{chatDate.formatTime()}</span>
        </Time>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  flex-wrap: wrap;

  width: 100%;

  margin-left: 10px;
`;

const StyledImage = styled(Image)`
  background-color: ${palette.DarkGray};
  border-radius: 10px 10px 0px 10px;
  object-fit: cover;
`;

const Nickname = styled.p`
  margin-left: 10px;
  font-size: 0.8125rem;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 6px 10px;

  font-size: 0.9375rem;
  line-height: 1.2em;

  color: ${palette.black};
  background-color: #fff;
  border-radius: 10px 10px 10px 0px;
`;

const Time = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;

  color: ${palette.DarkGray};
  font-size: 0.75rem;
`;

const StyledImg = styled(Image)`
  border-radius: 10px;
  border: 1px solid red;
  overflow: hidden;
`;

export default ChatItem;
