import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CreateTemplate from '../../components/create/CreateTemplate';
import { setChattingCreateTabMenu } from '../../modules/chatting/actions';

const create = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setChattingCreateTabMenu('새로입력'));
  }, []);

  return <CreateTemplate />;
};

export default create;
