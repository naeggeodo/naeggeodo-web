import styled from 'styled-components';
import Image from 'next/image';
import palette from '../../styles/palette';
import DateFormatter from '../../utils/DateFormatter';

import { PreviousChattingItemResponse } from '../../modules/chatting/types';

const MyChatItem = ({
  message,
  date,
}: {
  message: PreviousChattingItemResponse;
  date?: string;
}) => {
  const chatDate = new DateFormatter(date);

  return (
    <Wrap>
      <Time>
        <span>{chatDate.formatDate()}</span>
        <span>{chatDate.formatTime()}</span>
      </Time>
      {message.contents.includes('data:image/') ? (
        <StyledImg
          src={message.contents}
          alt='kakao logo'
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
  font-size: 0.9375rem;

  background-color: #fff;
  border-radius: 10px 10px 0px 10px;
  padding: 6px 10px;

  line-height: 1.2em;

  white-space: pre;

  max-width: 70%;
  word-wrap: break-word;
`;

const StyledImg = styled(Image)`
  border-radius: 10px;
  border: 1px solid red;
  overflow: hidden;
`;

export default MyChatItem;
