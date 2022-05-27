import styled from 'styled-components';
import palette from '../../styles/palette';

const CreateButton = ({ storeName }: { storeName: string }) => {
  return <Button disabled={storeName.length < 2}>내꺼톡 생성하기</Button>;
};

const Button = styled.button`
  all: unset;
  height: 52px;
  width: 100%;

  text-align: center;

  font-weight: 500;
  font-size: 1.0625rem;
  color: #ffffff;

  border-radius: 10px;
  background-color: ${palette.black};

  transition: 0.5s;
  cursor: pointer;

  &:disabled {
    background-color: ${palette.LineGray};
    cursor: not-allowed;
  }
`;

export default CreateButton;
