import React from 'react';
import styled from 'styled-components';
import { useSlideTransform } from '../../hooks/useSlideTransform';
import palette from '../../styles/palette';

const CategoryMenuSlide = ({ categories }: { categories: string[] }) => {
  const { slideRef } = useSlideTransform();
  return (
    <Container ref={slideRef}>
      <Track>
        {categories.map((category, index) => (
          <p key={index}>{category}</p>
        ))}
      </Track>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;

  width: 100%;

  font-size: 1.0625rem;

  background-color: #ffffff;

  border-bottom: 1px solid ${palette.LineGray};

  overflow: hidden;

  p {
    white-space: nowrap;
    cursor: grab;
  }
`;

const Track = styled.div`
  display: flex;
  gap: 20px;

  width: 100%;

  padding: 15px 15px 15px 30px;

  touch-action: none;
`;

export default CategoryMenuSlide;
