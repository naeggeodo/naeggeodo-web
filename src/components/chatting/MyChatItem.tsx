import moment from 'moment';
import styled from 'styled-components';
import Image from 'next/image';
import { PreviousChattingItemResponse } from '../../modules/chatting/types';
import palette from '../../styles/palette';
const MyChatItem = ({
  message,
  date,
}: {
  message: PreviousChattingItemResponse;
  date: string;
}) => {
  return (
    <Wrap>
      <Time>
        {moment().format('YYYYMMDD') === moment(date).format('YYYYMMDD') &&
        moment(date).format('a') === 'am'
          ? moment(date).format('오전 h:mm')
          : moment(date).format('오후 h:mm')}
        {moment().format('YYYYMMDD') !== moment(date).format('YYYYMMDD') &&
          moment(date).format('MM/DD')}
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
  color: ${palette.DarkGray};
  font-size: 0.75rem;
`;

const Content = styled.p`
  max-width: 70%;
  line-height: 1.2em;

  background: #fff;
  font-size: 0.9375rem;
  border-radius: 10px 10px 0px 10px;
  padding: 6px 10px;
  word-wrap: break-word;
`;

const StyledImg = styled(Image)`
  border-radius: 10px;
  border: 1px solid red;
  overflow: hidden;
`;

export default MyChatItem;
