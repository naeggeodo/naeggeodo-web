import moment from 'moment';
import Image from 'next/image';
import styled from 'styled-components';
import { PreviousChattingItemResponse } from '../../modules/chatting/types';
import palette from '../../styles/palette';

const ChatItem = ({
  message,
  date,
}: {
  message: PreviousChattingItemResponse;
  date: string;
}) => {
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
        {moment().format('YYYYMMDD') === moment(date).format('YYYYMMDD') &&
        moment(date).format('a') === 'am'
          ? moment(date).format('오전 h:mm')
          : moment(date).format('오후 h:mm')}
        {moment().format('YYYYMMDD') !== moment(date).format('YYYYMMDD') &&
          moment(date).format('MM/DD')}
      </Time>
    </Wrap>
  );
};

export default ChatItem;
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
  color: ${palette.DarkGray};
  font-size: 12px;
`;
const StyledImg = styled(Image)`
  border-radius: 10px;
  border: 1px solid red;
  overflow: hidden;
`;
