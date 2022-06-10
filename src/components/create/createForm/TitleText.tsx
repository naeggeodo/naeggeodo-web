import React from 'react';
import styled from 'styled-components';

const TitleText = ({ children }: { children: string }) => {
  return <Title>{children}</Title>;
};

const Title = styled.p`
  font-family: 'SpoqaBold';
`;

export default TitleText;
