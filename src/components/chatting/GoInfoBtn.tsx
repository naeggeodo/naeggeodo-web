import { useRouter } from 'next/router';
import styled from 'styled-components';
import palette from '../../styles/palette';

const GoInfoBtn = () => {
  const router = useRouter();
  const chattingRoomId = router.query.id;

  const onClick = () => {
    router.push(`/check-deposit/${chattingRoomId}`);
  };

  return <Button onClick={onClick}>돈을 받으셨나요?</Button>;
};

const Button = styled.button`
  width: 100%;

  padding: 13px;
  margin-bottom: 30px;

  background-color: #fff;
  color: ${palette.mainOrange};

  font-size: 1.0625rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  outline: none;
  border: none;

  &:active {
    background-color: ${palette.mainOrange};
    color: #fff;
  }
`;

export default GoInfoBtn;
