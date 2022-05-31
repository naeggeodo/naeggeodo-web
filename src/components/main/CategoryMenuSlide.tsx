import React, { useCallback } from 'react';
import styled from 'styled-components';
import { TOKEN_NAME } from '../../constant/Login';
import { useLoadLib } from '../../hooks/useLoadLib';
import { useSlideTransform } from '../../hooks/useSlideTransform';
import { CategoriesResponse } from '../../modules/main/types';
import { openLoginModal } from '../../modules/modal/actions';
import palette from '../../styles/palette';
import { convertEngCategoryToKor } from '../../utils/converEngCategoryToKor';

const CategoryMenuSlide = ({
  foodCategories,
}: {
  foodCategories: CategoriesResponse[];
}) => {
  const { router, dispatch } = useLoadLib();
  const { slideRef } = useSlideTransform();

  const routeToCategory = useCallback(
    (_, item: CategoriesResponse) => {
      if (!localStorage.getItem(TOKEN_NAME.ACCESS_TOKEN)) {
        dispatch(openLoginModal());
      } else if (item.category === 'ALL') {
        router.push({
          pathname: '/chatRooms',
          query: {
            buildingCode: '서울',
          },
        });
      } else {
        router.push({
          pathname: '/chatRooms',
          query: {
            buildingCode: '서울',
            category: item.category.toLowerCase(),
          },
        });
      }
    },
    [dispatch],
  );

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
                  !router.query.category && lowerCaseItem === 'all'
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
  text-decoration: none;
`;

export default CategoryMenuSlide;
