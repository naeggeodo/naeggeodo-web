import styled from 'styled-components';

const ChatDrawer = () => {
  return <Wrap></Wrap>;
};

const Wrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  width: 65%;
  height: 100%;

  background: #fff;
  box-shadow: 0 0 500px 500px rgba(0, 0, 0, 0.7);
  border-radius: 10px 0px 0px 0px;
`;

export default ChatDrawer;
