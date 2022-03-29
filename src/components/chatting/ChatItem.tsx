import Image from 'next/image';
import styled from 'styled-components';
import palette from '../../styles/palette';

const ChatItem = () => {
  return (
    <Wrap>
      <StyledImage src='/buger.png' width={35} height={35} />
      <Content>안녕하세요 주문메뉴 골라주세요</Content>
    </Wrap>
  );
};

export default ChatItem;
const Wrap = styled.div`
  display: flex;
  margin-left: 10px;
  gap: 5px;
`;
const StyledImage = styled(Image)`
  background: ${palette.DarkGray};
  border-radius: 10px 10px 0px 10px;
`;
const Content = styled.p`
  background: ${palette.mainOrange};
  font-size: 15px;
  border-radius: 10px 10px 10px 0px;
  align-items: flex-start;
  padding: 6px 10px;
  line-height: 150%;
`;
