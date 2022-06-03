import styled from 'styled-components';
import Image from 'next/image';
import palette from '../../styles/palette';
import DateFormatter from '../../utils/DateFormatter';

import { PreviousChattingItem } from '../../modules/chatting/types';
import { useMemo } from 'react';

const MyChatItem = ({
  message,
  date,
}: {
  message: PreviousChattingItem;
  date?: string;
}) => {
  const chatDate = useMemo(() => new DateFormatter(date), [date]);

  return (
    <Wrap>
      <Time>
        <span>{chatDate.formatDate()}</span>
        <span>{chatDate.formatTime()}</span>
      </Time>
      {message.contents.includes('data:image/') ? (
        <StyledImg
          src={message.contents}
          alt='채팅 이미지'
          width={400}
          height={300}
        />
      ) : (
        <Content>{message.contents}</Content>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: end;
  align-items: flex-end;
  gap: 5px;
  flex-wrap: wrap;

  margin-right: 10px;
`;

const Time = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;

  font-size: 0.75rem;
  color: ${palette.DarkGray};
`;

const Content = styled.p`
  max-width: 70%;

  display: flex;
  flex-wrap: wrap;

  padding: 6px 10px;

  font-size: 0.9375rem;
  line-height: 1.2em;
  background-color: #fff;
  border-radius: 10px 10px 0px 10px;
`;

const StyledImg = styled(Image)`
  border-radius: 10px;
  border: 1px solid red;
  overflow: hidden;
`;

export default MyChatItem;
