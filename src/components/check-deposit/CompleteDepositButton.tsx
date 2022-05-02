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

  font-size: 1.0625rem;
  color: #ffffff;
  background-color: ${palette.mainOrange};

  border-radius: 10px;

  width: 10%;
  height: 52px;
  max-width: 100px;
  min-width: 80px;

  border: none;
  outline: none;

  @media ${responsive.compact} {
    font-size: 0.9375rem;
  }
`;

export default CompleteDepositButton;
