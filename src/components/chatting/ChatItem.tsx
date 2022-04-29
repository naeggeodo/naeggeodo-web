import Image from 'next/image';
import styled from 'styled-components';
import { PreviousChattingItemResponse } from '../../modules/chatting/types';
import palette from '../../styles/palette';
import DateFormatter from '../../utils/DateFormatter';

const ChatItem = ({
  message,
  date,
}: {
  message: PreviousChattingItemResponse;
  date?: string;
}) => {
  const chatDate = new DateFormatter(date);

  return (
    <Wrap>
      <StyledImage
        src='/assets/images/hamburger.svg'
        width={35}
        height={35}
        layout='fixed'
      />
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

      <Time>
        <span>{chatDate.formatDate()}</span>
        <span>{chatDate.formatTime()}</span>
      </Time>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;

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

  padding: 6px 10px;

  font-size: 0.9375rem;
  color: #fff;
  background-color: ${palette.mainOrange};
  line-height: 1.2em;

  border-radius: 10px 10px 10px 0px;
  word-wrap: break-word;
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
