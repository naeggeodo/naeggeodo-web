import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { RootState } from '../../modules';
import { getFoodCategoriesActions } from '../../modules/main/actions';
import { CategoriesResponse } from '../../modules/main/types';

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

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getFoodCategoriesActions.request());
    } else return;
  }, [dispatch]);

  return (
    <Container isOpen={isOpen}>
      <TitleContainer>
        <p>카테고리를 선택해주세요</p>
      </TitleContainer>
    </Container>
  );
};

const Container = styled.div<StyledProps>`
  position: absolute;
  right: 0;

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

  padding: 10px 10px;

  transition: 0.5s;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;

  font-size: 1.375rem;

  border-radius: 20px 0px 0px 0px;
`;

export default SelectCategoryDrawer;
