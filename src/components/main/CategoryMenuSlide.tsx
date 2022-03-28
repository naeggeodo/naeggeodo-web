import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

interface Props {
  categories: string[];
}

const CategoryMenuSlide: FC<Props> = ({ categories }) => {
  const [initialPosition, setInitialPosition] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [diff, setDiff] = useState(null);
  const [moving, setMoving] = useState(false);
  const [transform, setTransform] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const gestureStart = (e) => {
    setInitialPosition(e.pageX);
    setMoving(true);
    const transformMatrix = window
      .getComputedStyle(slideRef.current)
      .getPropertyValue('transform');
    if (transformMatrix !== 'none') {
      setTransform(parseInt(transformMatrix.split(',')[4].trim()));
    }
  };

  const gestureMove = (e) => {
    if (moving) {
      setCurrentPosition(e.pageX);
      setDiff(currentPosition - initialPosition);
      slideRef.current.style.transform = `translateX(${transform + diff}px)`;
    }
  };

  const gestureEnd = (e) => {
    setMoving(false);
  };

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
  padding-bottom: 8px;
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
  touch-action: none;
  padding-left: 30px;
`;

export default CategoryMenuSlide;
