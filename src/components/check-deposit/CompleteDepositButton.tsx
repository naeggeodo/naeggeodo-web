import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import responsive from '../../styles/responsive';

const CompleteDepositButton = () => {
  return <Button>수령완료</Button>;
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'spoqa';
  background-color: ${palette.mainOrange};
  color: #ffffff;
  font-size: 17px;
  border: none;
  outline: none;
  border-radius: 10px;
  width: 100px;
  height: 52px;

  @media ${responsive.compact} {
    font-size: 15px;
    min-width: 70px;
  }
`;

export default CompleteDepositButton;
