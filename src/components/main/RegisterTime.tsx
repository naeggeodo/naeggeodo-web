import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const RegisterTime = ({ children }: { children: string }) => {
  return <Container>{children}</Container>;
};

const Container = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 40px;
  height: 20px;

  font-size: 0.75rem;
  color: ${palette.DarkGray};

  background-color: ${palette.LightGray};

  padding: 0 4px;
  border-radius: 3px;
`;

export default RegisterTime;
