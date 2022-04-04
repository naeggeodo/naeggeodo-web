import styled from 'styled-components';
import palette from '../../styles/palette';

const MyChatItem = () => {
  return (
    <Wrap>
      <Time>오후 3:30</Time>
      <Content>안녕하세요. 지금 주문 가능하신가요?</Content>
    </Wrap>
  );
};

export default MyChatItem;
const Wrap = styled.div`
  display: flex;
  gap: 5px;
  justify-content: end;
  align-items: flex-end;
  margin: 5px 0;
  margin-right: 10px;
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
  line-height: 150%;
`;
