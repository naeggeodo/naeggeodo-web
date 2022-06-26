import React from 'react';
import styled from 'styled-components';

const TitleText = ({ children }: { children: string }) => {
  return <Title>{children}</Title>;
};

const Title = styled.p`
  font-family: 'SpoqaBold';
  word-break: keep-all;
  line-height: 1.3;
`;

export default TitleText;
