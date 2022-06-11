import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import LoginModal from '../login/LoginModalTemplate';
import TabMenu from '../main/TabMenu';
import CreateForm from './createForm/CreateForm';
import CreateInit from './CreateInit';

const CreateTemplate = () => {
  const loginModalIsClicked = useSelector(
    (state: RootState) => state.modalStates.loginModalIsClicked,
  );

  const { orderTimeType } = useSelector(
    (state: RootState) => state.createStates,
  );

  return (
    <React.Fragment>
      {orderTimeType ? <CreateForm /> : <CreateInit />}
      {loginModalIsClicked && <LoginModal />}
      <TabMenu />
    </React.Fragment>
  );
};

export default CreateTemplate;
