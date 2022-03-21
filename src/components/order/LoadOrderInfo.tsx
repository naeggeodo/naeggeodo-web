import React from 'react';
import styled, { css } from 'styled-components';

type StyleProps = {
  pink: boolean;
  children: string;
};

const LoadOrderInfo = ({ children, pink }: StyleProps) => {
  return <Wrapper pink={pink}>{children}</Wrapper>;
};

const Wrapper = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #f2f2f8;
  border-radius: 5px;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.5px;
  cursor: pointer;
  color: #ff7b30;

  ${(props) =>
    props.pink &&
    css`
      background-color: pink;
    `}
`;

export default LoadOrderInfo;
