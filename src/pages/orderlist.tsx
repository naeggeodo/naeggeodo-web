import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import OrderListTemplate from '../components/orderlist/OrderListTemplate';
import { setChattingCreateTabMenu } from '../modules/chatting/actions';

const orderlist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setChattingCreateTabMenu('주문목록'));
  }, []);

  return <OrderListTemplate />;
};

export default orderlist;
