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
  width: 100%;
  display: flex;
  margin-left: 10px;
  gap: 5px;
  align-items: flex-end;
`;

const StyledImage = styled(Image)`
  background: ${palette.DarkGray};
  border-radius: 10px 10px 0px 10px;
  object-fit: cover;
`;

const Content = styled.p`
  background: ${palette.mainOrange};
  font-size: 15px;
  border-radius: 10px 10px 10px 0px;
  padding: 6px 10px;
  line-height: 1.2em;
  color: #fff;
  max-width: 70%;
  word-wrap: break-word;
`;

const Time = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;

  color: ${palette.DarkGray};
  font-size: 12px;
`;

const StyledImg = styled(Image)`
  border-radius: 10px;
  border: 1px solid red;
  overflow: hidden;
`;

export default ChatItem;
