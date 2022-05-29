import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { TOKEN_NAME } from '../../constant/Login';
import { useCheckValidate } from '../../hooks/useCheckValidate';
import { useLoadLib } from '../../hooks/useLoadLib';
import { useSlideTransform } from '../../hooks/useSlideTransform';
import { openLoginModal } from '../../modules/login/actions';
import { CategoriesResponse, Category } from '../../modules/main/types';
import palette from '../../styles/palette';

const CategoryMenuSlide = ({
  foodCategories,
}: {
  foodCategories: CategoriesResponse[];
}) => {
  const { router, dispatch } = useLoadLib();
  const { slideRef } = useSlideTransform();

  const convertEngCategoryToKor = (category: Category) => {
    switch (category) {
      case 'ALL':
        return '전체';
      case 'CHICKEN':
        return '치킨';
      case 'CHINESE':
        return '중식';
      case 'DESSERT':
        return '디저트';
      case 'FASTFOOD':
        return '패스트푸드';
      case 'GRILLED_MEAT':
        return '구이/고기';
      case 'JAPANESE':
        return '일식';
      case 'KOREAN':
        return '한식';
      case 'PIZZA':
        return '피자';
      case 'PORK_FEET':
        return '족발';
      case 'SNACKS':
        return '분식';
      case 'STEW':
        return '찌개';
      case 'WESTERN':
        return '양식';
      case 'HAMBURGER':
        return '햄버거';
    }
  };

  const routeToCategory = useCallback(() => {
    if (!localStorage.getItem(TOKEN_NAME.ACCESS_TOKEN)) {
      dispatch(openLoginModal());
    } else {
      router.push(``);
    }
  }, [dispatch]);

  return (
    <Container ref={slideRef}>
      <Track>
        {foodCategories?.map((item) => {
          const lowerCaseItem = item.category.toLowerCase();
          return (
            <LinkButton
              key={item.category}
              onClick={routeToCategory}
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
