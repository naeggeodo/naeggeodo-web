import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { useSlideTransform } from '../../hooks/useSlideTransform';
import { CategoriesResponse, Category } from '../../modules/main/types';
import palette from '../../styles/palette';

const CategoryMenuSlide = ({
  foodCategories,
}: {
  foodCategories: CategoriesResponse[];
}) => {
  const router = useRouter();
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

  return (
    <Container ref={slideRef}>
      <Track>
        {foodCategories?.map((item) => {
          const lowerCaseItem = item.category.toLowerCase();
          return (
            <Link
              passHref
              href={{
                pathname: '/',
                query:
                  lowerCaseItem === 'all'
                    ? { buildingcode: 1234 }
                    : { category: lowerCaseItem, buildingcode: 1234 },
              }}
              key={item.idx}>
              <StyledLink
                style={{
                  color:
                    !router.query.category && lowerCaseItem === 'all'
                      ? `${palette.mainOrange}`
                      : router.query.category === lowerCaseItem
                      ? `${palette.mainOrange}`
                      : `${palette.black}`,
                }}>
                {convertEngCategoryToKor(item.category)}
              </StyledLink>
            </Link>
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

const StyledLink = styled.a`
  padding: 10px;
  font-size: 1.0625rem;
  color: ${palette.black};

  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
`;

export default CategoryMenuSlide;
