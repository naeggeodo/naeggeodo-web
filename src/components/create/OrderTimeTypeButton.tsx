import React from 'react';
import styled from 'styled-components';
import { OrderTimeType } from '../../modules/create/types';

type StyledType = {
  isActive: boolean;
};

interface Props {
  children: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean;
  dataValue: OrderTimeType;
}

const OrderTimeTypeButton = ({
  dataValue,
  children,
  handleClick,
  isActive,
}: Props) => {
  return (
    <Button data-value={dataValue} isActive={isActive} onClick={handleClick}>
      {children}
    </Button>
  );
};

const Button = styled.button<StyledType>`
  padding: 15px;

  font-size: 0.9375rem;
  font-family: 'SpoqaBold';
  color: ${(props) => (props.isActive ? '#EF6212' : '#000')};

  background-color: ${(props) => (props.isActive ? '#FDEFE7' : '#f5f5f5')};

  border-radius: 10px;
  cursor: pointer;
  border: none;
  outline: none;
`;

export default OrderTimeTypeButton;
