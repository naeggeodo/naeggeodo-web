import React from 'react';
import styled from 'styled-components';
import { useCheckValidate } from '../../hooks/useCheckValidate';
import { useSlideTransform } from '../../hooks/useSlideTransform';
import { CategoriesResponse } from '../../modules/common/types';
import palette from '../../styles/palette';
import { convertEngCategoryToKor } from '../../utils/converEngCategoryToKor';

const CategoryMenuSlide = ({
  foodCategories,
}: {
  foodCategories: CategoriesResponse[];
}) => {
  const { router, routeToCategory } = useCheckValidate();
  const { slideRef } = useSlideTransform();

  return (
    <Container ref={slideRef}>
      <Track>
        {foodCategories?.map((item) => {
          const lowerCaseItem = item.category.toLowerCase();
          return (
            <LinkButton
              key={item.category}
              onClick={(e) => routeToCategory(e, item)}
              style={{
                color:
                  router.query.buildingCode &&
                  !router.query.category &&
                  lowerCaseItem === 'all'
                    ? `${palette.mainOrange}`
                    : router.query.category === lowerCaseItem
                    ? `${palette.mainOrange}`
                    : `${palette.black}`,
              }}>
              {convertEngCategoryToKor(item.category)}
            </LinkButton>
          );
        })}
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

  padding: 5px 15px 5px 30px;

  touch-action: none;
`;

const LinkButton = styled.button`
  all: unset;

  padding: 10px;
  font-size: 1.0625rem;
  color: ${palette.black};

  cursor: pointer;
  white-space: nowrap;
`;

export default CategoryMenuSlide;
