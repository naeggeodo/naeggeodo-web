import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import CompleteModalTemplate from '../common/CompleteModalTemplate';
import LoginModal from '../login/LoginModalTemplate';
import TabMenu from '../main/TabMenu';
import CreateDetails from './createForm/CreateDetails';
import CreateInit from './CreateInit';

const CreateTemplate = () => {
  const loginModalIsClicked = useSelector(
    (state: RootState) => state.modalStates.loginModalIsClicked,
  );
  const completeModalIsOpen = useSelector(
    (state: RootState) => state.modalStates.completeModalIsOpen,
  );

  const { orderTimeType } = useSelector(
    (state: RootState) => state.createStates.createData,
  );

  return (
    <React.Fragment>
      {orderTimeType ? <CreateDetails /> : <CreateInit />}
      {loginModalIsClicked && <LoginModal />}
      {completeModalIsOpen && <CompleteModalTemplate />}
      <TabMenu />
    </React.Fragment>
  );
};

export default CreateTemplate;
