import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import LoginModal from '../login/LoginModalTemplate';
import TabMenu from '../main/TabMenu';
import CreateInit from './CreateInit';

const CreateTemplate = () => {
  const loginModalIsClicked = useSelector(
    (state: RootState) => state.modalStates.loginModalIsClicked,
  );

  return (
    <>
      <CreateInit />
      {loginModalIsClicked && <LoginModal />}
      <TabMenu />
    </>
  );
};

export default CreateTemplate;
