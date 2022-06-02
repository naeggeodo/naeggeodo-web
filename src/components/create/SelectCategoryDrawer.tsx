import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { RootState } from '../../modules';
import { selectCategory } from '../../modules/create/actions';
import { getFoodCategoriesActions } from '../../modules/main/actions';
import { CategoriesResponse, Category } from '../../modules/main/types';
import palette from '../../styles/palette';
import { convertEngCategoryToKor } from '../../utils/converEngCategoryToKor';

interface StyledProps {
  isOpen: boolean;
}
interface PropsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectCategoryDrawer = ({ isOpen, setIsOpen }: PropsType) => {
  const dispatch = useDispatch();
  const categories: CategoriesResponse[] = useSelector(
    (state: RootState) => state.mainPageState.categories,
  );
  const category = useSelector(
    (state: RootState) => state.createStates.category,
  );

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getFoodCategoriesActions.request());
    } else return;
  }, [dispatch, categories]);

  const dispatchSelectCategory = useCallback<
    (e: React.MouseEvent<HTMLButtonElement>) => void
  >(
    (e) => {
      const selected = e.currentTarget.getAttribute('data-value') as Category;
      dispatch(selectCategory(selected));
    },
    [dispatch],
  );

  const completeSelect = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  return (
    <Container isOpen={isOpen}>
      {isOpen && (
        <React.Fragment>
          <TitleContainer>
            <p>카테고리를 선택해주세요</p>
          </TitleContainer>
          <CategoryContainer>
            {categories.map((item) => (
              <CategoryItem
                selected={category}
                onClick={dispatchSelectCategory}
                data-value={item.category}
                key={item.category}>
                {convertEngCategoryToKor(item.category)}
              </CategoryItem>
            ))}
            <CloseButton onClick={completeSelect}>선택완료</CloseButton>
          </CategoryContainer>
        </React.Fragment>
      )}
    </Container>
  );
};

const Container = styled.div<StyledProps>`
  position: absolute;
  right: 0;
  background-color: green;

  width: ${(props) => (props.isOpen ? '70%' : '0%')};

  ${(props) =>
    props.isOpen &&
    css`
      border-radius: 20px 0px 0px 20px;

      box-shadow: 0 0 1000px 1000px rgba(0, 0, 0, 0.5);
      z-index: 1;
    `}

  height: 72vh;
  background-color: #ffffff;

  padding: 30px 10px;
  overflow: scroll;

  transition: 0.3s;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;

  font-size: 1.375rem;

  border-radius: 20px 0px 0px 0px;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-top: 20px;
`;

const CloseButton = styled.button`
  all: unset;

  font-size: 1rem;
  color: #ffffff;
  text-align: center;

  padding: 5px 15px;
  margin-top: 10px;

  border-radius: 5px;
  background-color: ${palette.mainOrange};

  cursor: pointer;
`;

const CategoryItem = styled.button<{ selected: Category }>`
  all: unset;
  text-align: center;

  border-radius: 10px;
  padding: 10px 0;

  background-color: ${palette.bgGray};

  cursor: pointer;

  ${(props) =>
    props.selected === props['data-value'] &&
    css`
      background-color: #fdefe7;
      color: ${palette.mainOrange};
    `}
`;

export default React.memo(SelectCategoryDrawer);
