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
  const slideRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setInitialPosition(e.pageX);
    setMoving(true);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (moving) {
      setCurrentPosition(e.pageX);
      setDiff(currentPosition - initialPosition);
      slideRef.current.style.transform = `translateX(${diff}px)`;
    }
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    setMoving(false);
  };

  return (
    <Container>
      <Track
        ref={slideRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}>
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
        <Card>4</Card>
        <Card>5</Card>
        <Card>6</Card>
        <Card>7</Card>
        <Card>8</Card>
        <Card>9</Card>
        <Card>10</Card>
        {/* {categories.map((category, index) => (
          <p key={index}>{category}</p>
        ))} */}
      </Track>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  background-color: beige;
  left: 500px;
  width: 400px;
  height: 100vh;
  font-size: 17px;
  padding-bottom: 4px;
  border-bottom: 1px solid ${palette.LineGray};
  overflow: hidden;

  p {
    white-space: nowrap;
    cursor: grab;
  }
`;

const Track = styled.div`
  position: absolute;
  display: flex;
  gap: 20px;
  left: 10px;
  top: 150px;
`;

const Card = styled.div`
  width: 300px;
  height: 300px;
  background-color: blue;
  border-radius: 3px;
  font-size: 30px;
  color: white;
`;

export default CategoryMenuSlide;
