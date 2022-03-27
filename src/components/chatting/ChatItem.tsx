import Image from 'next/image';
import styled from 'styled-components';
import palette from '../../styles/palette';

const ChatItem = () => {
  return (
    <Wrap>
      <Img />
      <Content>안녕하세요 주문메뉴 골라주세요</Content>
    </Wrap>
  );
};

export default ChatItem;
const Wrap = styled.div`
  display: flex;
`;
const Img = styled.div`
  width: 35px;
  height: 35px;
  background: ${palette.DarkGray};
  border-radius: 10px 10px 0px 10px;
  margin: 0px 5px;
`;
const Content = styled.p`
  background: ${palette.mainOrange};
  font-size: 15px;
  border-radius: 10px 10px 10px 0px;
  align-items: flex-start;
  padding: 6px 10px;
  line-height: 150%;
`;
