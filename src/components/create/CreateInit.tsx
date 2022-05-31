import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import palette from '../../styles/palette';

import { useLoadLib } from '../../hooks/useLoadLib';
import { RootState } from '../../modules';
import { selectOrderType } from '../../modules/create/actions';
import { ButtonValue } from '../../modules/create/types';

type StyledType = {
  active: boolean;
};

const buttonValue: ButtonValue[] = [
  {
    text: '1시간 이내',
    value: 'ONE_HOUR',
  },
  {
    text: '최대한 빨리',
    value: 'ASAP',
  },
  {
    text: '상관없음 (인원이 모집되는대로)',
    value: 'I_DONT_CARE',
  },
];

const CreateInit = () => {
  const { router, dispatch } = useLoadLib();

  const selectOrderTypeTime = useCallback(
    (e) => {
      console.log(e.target);
      // dispatch(selectOrderType())
    },
    [dispatch, router],
  );

  return (
    <Container>
      <div>
        <Title>언제 음식을</Title>
        <Title>주문하실건가요?</Title>
      </div>
      <Content>
        <CustomButton>직접입력</CustomButton>
        {buttonValue.map((item, i) => (
          <Button
            key={i}
            onClick={() => {
              dispatch(selectOrderType(item));
              router.push('/create/directinput');
            }}
            active>
            {item.text}
          </Button>
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: #fff;

  padding: 46px 30px 83px;

  position: relative;

  margin: 0 auto;
`;

const Title = styled.h3`
  font-family: 'SpoqaBold';
  padding: 0 6px;
  line-height: 36.4px;
  font-size: 1.625rem;
`;

const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 10px;
`;

const CustomButton = styled.button`
  margin-bottom: 10px;

  background-color: #fff;
  color: ${palette.DarkGray};

  text-align: right;
  outline: none;
  border: none;
`;

const Button = styled.button<StyledType>`
  padding: 15px;

  font-size: 0.9375rem;
  font-family: 'SpoqaBold';
  color: ${(props) => (props.active ? '#EF6212' : '#000')};

  background-color: ${(props) => (props.active ? '#FDEFE7' : '#f5f5f5')};

  border-radius: 10px;
  cursor: pointer;
  border: none;
  outline: none;
`;

export default CreateInit;
