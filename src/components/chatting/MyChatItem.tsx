import moment from 'moment';
import styled from 'styled-components';
import { ChatItemType } from '../../modules/chatting/types';
import palette from '../../styles/palette';

const MyChatItem = ({ v, date }: { v: ChatItemType; date: string }) => {
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
      <Content>{v.contents}</Content>
    </Wrap>
  );
};

export default MyChatItem;
const Wrap = styled.div`
  display: flex;
  gap: 5px;
  justify-content: end;
  align-items: flex-end;
  margin-right: 10px;
  width: 100%;
`;
const Time = styled.p`
  color: ${palette.DarkGray};
  font-size: 12px;
`;
const Content = styled.p`
  background: #fff;
  font-size: 15px;
  border-radius: 10px 10px 0px 10px;
  align-items: flex-start;
  padding: 6px 10px;
  line-height: 1.2em;
  max-width: 80%;
`;
