import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../../modules';
import { OrderTimeType } from '../../modules/common/types';
import { selectOrderTimeType } from '../../modules/create/actions';
import { openLoginModal } from '../../modules/modal/actions';

export function useCreateInit(dispatch: Dispatch) {
  const [selectedOrderTimeType, setSelectedOrderTimeType] =
    useState<OrderTimeType>();
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

  return {
    selectedOrderTimeType,
    selectOrderTimeType,
    selectOrderTypeTimeInComponent,
    dispatchOrderTimeType,
  };
}
