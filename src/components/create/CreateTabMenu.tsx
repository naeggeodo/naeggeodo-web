import React, { Dispatch, SetStateAction, useCallback } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

type StyledType = {
  isActive: boolean;
};

const CreateTabMenu = ({
  isShowCreateForm,
  setIsShowCreateForm,
}: {
  isShowCreateForm: boolean;
  setIsShowCreateForm: Dispatch<SetStateAction<boolean>>;
}) => {
  const onMenuClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const target = e.target as HTMLButtonElement;
      if (target.innerText === '새로입력') {
        setIsShowCreateForm(true);
      } else {
        setIsShowCreateForm(false);
      }
    },
    [isShowCreateForm],
  );

  return (
    <Container>
      <Button isActive={isShowCreateForm} onClick={onMenuClick}>
        새로입력
      </Button>
      <Button isActive={!isShowCreateForm} onClick={onMenuClick}>
        이전 생성내역 불러오기
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;

  display: flex;
  gap: 20px;

  margin: 0 auto;
`;

const Button = styled.button<StyledType>`
  all: unset;

  font-family: 'SpoqaBold';
  font-size: 1.125rem;
  color: ${(props) =>
    props.isActive ? `${palette.mainOrange}` : `${palette.TextGray}`};

  border: none;
  border-bottom: ${(props) =>
    props.isActive
      ? `3px solid ${palette.mainOrange}`
      : '3px solid transparent'};

  padding-bottom: 14.5px;

  background: none;
  outline: none;
  cursor: pointer;
`;

export default CreateTabMenu;
