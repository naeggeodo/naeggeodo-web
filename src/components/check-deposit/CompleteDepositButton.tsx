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
  background-color: ${palette.mainOrange};
  color: #ffffff;
  font-size: 17px;
  border: none;
  outline: none;
  border-radius: 10px;
  max-width: 100px;
  min-width: 80px;
  width: 10%;
  height: 52px;

  @media ${responsive.compact} {
    font-size: 15px;
  }
`;

export default CompleteDepositButton;
