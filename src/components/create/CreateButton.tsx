import React from 'react';
import styled from 'styled-components';
import { Category } from '../../modules/common/types';
import palette from '../../styles/palette';

const CreateButton = ({
  maxCount,
  category,
  storeName,
  handleClick,
}: {
  maxCount?: number;
  category?: Category;
  storeName?: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <Button
      onClick={handleClick}
      disabled={storeName.length < 2 || !category || maxCount <= 1}>
      내꺼톡 생성하기
    </Button>
  );
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
