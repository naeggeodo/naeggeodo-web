import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import palette from '../../styles/palette';

type StyledType = {
  isActive: boolean;
};

const CreateTabMenu = () => {
  const router = useRouter();

  const onClick = () => {
    if (router.pathname === '/create/details') {
      router.push('/naeggeotalk');
    } else if (router.pathname === '/naeggeotalk') {
      router.push('/create/details');
    }
  };

  return (
    <Wrap>
      <Button isActive={router.pathname === '/create/details'} onClick={onClick}>
        새로입력
      </Button>
      <Button isActive={router.pathname === '/naeggeotalk'} onClick={onClick}>
        주문목록
      </Button>
    </Wrap>
  );
};

const Wrap = styled.div`
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
