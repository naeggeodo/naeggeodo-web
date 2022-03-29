import React from 'react';
import styled from 'styled-components';
import { useSlideTransform } from '../../hooks/useSlideTransform';
import palette from '../../styles/palette';

const CategoryMenuSlide = ({ categories }: { categories: string[] }) => {
  const { gestureStart, gestureMove, gestureEnd, slideRef } =
    useSlideTransform();

  return (
    <Container>
      <Track
        ref={slideRef}
        onPointerDown={gestureStart}
        onPointerMove={gestureMove}
        onPointerUp={gestureEnd}>
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
  font-size: 17px;
  border-bottom: 1px solid ${palette.LineGray};
  overflow: hidden;
  background-color: #ffffff;

  p {
    white-space: nowrap;
    cursor: grab;
  }
`;

const Track = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  touch-action: none;
  padding: 15px 0 15px 30px;
`;

export default CategoryMenuSlide;
