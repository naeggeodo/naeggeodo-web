import styled from 'styled-components';
import { useCustomRouter } from '../../hooks/utils/useCustomRouter';
import { useLoadLib } from '../../hooks/utils/useLoadLib';
import palette from '../../styles/palette';

const GoInfoBtn = () => {
  const { router } = useLoadLib();
  const chattingRoomId = router.query.id;

  const { shiftPage } = useCustomRouter(`/check-deposit/${chattingRoomId}`);

  return <Button onClick={shiftPage}>돈을 받으셨나요?</Button>;
};

const Button = styled.button`
  width: 100%;

  padding: 13px;
  margin-bottom: 0px;

  color: ${palette.mainOrange};
  background-color: #fff;

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
