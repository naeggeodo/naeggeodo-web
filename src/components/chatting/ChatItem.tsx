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
  // TODO 오늘 날짜는 안나오기
  const chatDate = useMemo(() => new DateFormatter(date), [date]);
  const currentDate = new Date();
  const today = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`;

  return (
    <Container>
      <StyledImage
        src='/assets/images/hamburger.svg'
        width={35}
        height={35}
        layout='fixed'
      />
      {message.contents?.includes('data:image/') ? (
        <StyledImg
          src={message.contents}
          alt='채팅 이미지'
          width={400}
          height={400}
        />
      ) : (
        // TODO CNT일떄 카운트 늘려주기
        <React.Fragment>
          <div>신길동 호랭이</div>
          <Content>{message.type === 'CNT' || message.contents}</Content>
        </React.Fragment>
      )}

      <Time>
        <span>{chatDate.formatDate()}</span>
        <span>{chatDate.formatTime()}</span>
      </Time>
    </Container>
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

const Content = styled.p`
  max-width: 70%;

  display: flex;
  flex-wrap: wrap;

  padding: 6px 10px;

  font-size: 0.9375rem;
  line-height: 1.2em;
  color: #fff;
  background-color: ${palette.mainOrange};
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
