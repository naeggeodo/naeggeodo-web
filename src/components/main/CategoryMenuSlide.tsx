import React, { FC } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

interface Props {
  categories: string[];
}

const CategoryMenuSlide: FC<Props> = ({ categories }) => {
  return (
    <Container>
      {categories.map((category) => (
        <p>{category}</p>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  font-size: 17px;
  padding-bottom: 4px;
  border-bottom: 1px solid ${palette.LineGray};
`;

export default CategoryMenuSlide;
