import styled from 'styled-components';
import Image from 'next/image';
import palette from '../../styles/palette';
import DateFormatter from '../../utils/DateFormatter';

import { ChattingListItem } from '../../modules/chatting/types';
import { useMemo } from 'react';

const MyChatItem = ({
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
    <Container>
      <Time>
        {today === chatDate.date ? null : <span>{chatDate.formatDate()}</span>}
        <span>{chatDate.formatTime()}</span>
      </Time>
      {message.contents.includes('data:image/') ? (
        <StyledImg
          src={message.contents}
          alt="채팅 이미지"
          width={250}
          height={250}
        />
      ) : (
        <Content>{message.contents}</Content>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: end;
  align-items: flex-end;
  gap: 5px;
  flex-wrap: wrap;
`;

const Time = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;

  font-size: 0.75rem;
  color: ${palette.DarkGray};
`;

const Content = styled.p`
  word-break: break-all;
  max-width: 60%;

  padding: 6px 10px;

  font-size: 0.9375rem;
  line-height: 1.2em;
  background-color: ${palette.mainOrange};
  color: #fff;
  border-radius: 10px 10px 0px 10px;
`;

const StyledImg = styled(Image)`
  border-radius: 10px;
  border: 1px solid red;
  overflow: hidden;
`;

export default MyChatItem;
