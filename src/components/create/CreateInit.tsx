import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { useLoadLib } from '../../hooks/useLoadLib';
import { RootState } from '../../modules';
import { ButtonValue, OrderTimeType } from '../../modules/create/types';
import { selectOrderTimeType } from '../../modules/create/actions';
import OrderTimeTypeButton from './OrderTimeTypeButton';

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
  const currentOrderTimeType = useSelector(
    (state: RootState) => state.createStates.orderTimeType,
  );

  const dispatchSelectOrderTypeTime = useCallback<
    (e: React.MouseEvent<HTMLButtonElement>) => void
  >(
    (e) => {
      const orderTimeType = e.currentTarget.getAttribute(
        'data-value',
      ) as OrderTimeType;

      dispatch(selectOrderTimeType(orderTimeType));
      router.push('/create/details');
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
        {buttonValue.map((item, i) => (
          <OrderTimeTypeButton
            handleClick={dispatchSelectOrderTypeTime}
            key={i}
            dataValue={item.value}
            isActive={currentOrderTimeType === item.value ? true : false}>
            {item.text}
          </OrderTimeTypeButton>
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

export default CreateInit;
