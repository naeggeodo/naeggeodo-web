import React from 'react';
import styled from 'styled-components';
import palette from '../../../styles/palette';
import TitleText from './TitleText';

const FieldTitle = ({ title }: { title: string }) => {
  return (
    <Container>
      <TitleText>{title}</TitleText>
      <OrangeStar>*</OrangeStar>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const OrangeStar = styled.span`
  font-weight: 500;
  font-size: 0.9375rem;

  color: ${palette.mainOrange};
`;

export default FieldTitle;
