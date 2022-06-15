import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { useLoadLib } from '../../hooks/utils/useLoadLib';
import { RootState } from '../../modules';
import { ButtonValue } from '../../modules/create/types';
import { selectOrderTimeType } from '../../modules/create/actions';

import { openLoginModal } from '../../modules/modal/actions';
import OrderTimeTypeButton from './OrderTimeTypeButton';
import palette from '../../styles/palette';
import { OrderTimeType } from '../../modules/common/types';

const buttonValue: ButtonValue[] = [
  {
    text: '1시간 이내',
    value: 'ONE_HOUR',
  },
  {
    text: '최대한 빨리',
    value: 'QUICK',
  },
  {
    text: '상관없음 (인원이 모집되는대로)',
    value: 'FREEDOM',
  },
];

const CreateInit = () => {
  const [selectedOrderTimeType, setSelectedOrderTimeType] =
    useState<OrderTimeType>();
  const { router, dispatch } = useLoadLib();

  const accessToken = useSelector(
    (state: RootState) => state.loginState.accessToken,
  );

  const selectOrderTypeTimeInComponent = useCallback<
    (e: React.MouseEvent<HTMLButtonElement>) => void
  >(
    (e) => {
      if (!accessToken) {
        dispatch(openLoginModal());
      } else {
        const orderTimeType = e.currentTarget.getAttribute(
          'data-value',
        ) as OrderTimeType;

        setSelectedOrderTimeType(orderTimeType);
      }
    },
    [dispatch, selectedOrderTimeType],
  );

  const dispatchOrderTimeType = useCallback(() => {
    dispatch(selectOrderTimeType(selectedOrderTimeType));
  }, [dispatch, selectedOrderTimeType]);

  return (
    <Container>
      <div>
        <Title>언제 음식을</Title>
        <Title>주문하실건가요?</Title>
      </div>
      <Content>
        {buttonValue.map((item, i) => (
          <OrderTimeTypeButton
            handleClick={selectOrderTypeTimeInComponent}
            key={item.text}
            dataValue={item.value}
            isActive={selectedOrderTimeType === item.value ? true : false}>
            {item.text}
          </OrderTimeTypeButton>
        ))}
        <NextStepButtonContainer>
          <NextStepButton onClick={dispatchOrderTimeType}>
            다음으로 &gt;
          </NextStepButton>
        </NextStepButtonContainer>
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

const NextStepButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NextStepButton = styled.button`
  padding: 10px 30px;

  font-size: 0.9375rem;
  font-family: 'SpoqaBold';

  border-radius: 10px;
  background-color: ${palette.mainOrange};
  color: #fff;

  cursor: pointer;
  border: none;
  outline: none;
`;

export default CreateInit;
