import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NaeggeotalkTemplate from '../../components/naeggeotalk/NaeggeotalkTemplate';
import { setChattingCreateTabMenu } from '../../modules/chatting/actions';

const naeggeotalk = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setChattingCreateTabMenu('주문목록'));
  }, []);

  return <NaeggeotalkTemplate />;
};

export default naeggeotalk;
