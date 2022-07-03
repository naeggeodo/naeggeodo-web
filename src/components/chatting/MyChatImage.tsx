import Image from 'next/image';
import { useMemo } from 'react';
import styled from 'styled-components';
import { ChattingListItem } from '../../modules/chatting/types';
import palette from '../../styles/palette';
import DateFormatter from '../../utils/DateFormatter';

const MyChatImage = ({
  date,
  message,
}: {
  date: string;
  message: ChattingListItem;
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
      <StyledImg
        src={message.contents}
        alt="채팅 이미지"
        width={250}
        height={500}
      />
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

const StyledImg = styled(Image)`
  border-radius: 10px;
  border: 1px solid red;
  overflow: hidden;
`;

export default MyChatImage;
