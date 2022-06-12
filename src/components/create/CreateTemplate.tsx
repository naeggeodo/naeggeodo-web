import React from 'react';
import { useSelector } from 'react-redux';
import { useSelectModalStates } from '../../hooks/select/useSelectModalStates';
import { RootState } from '../../modules';
import CompleteModalTemplate from '../common/CompleteModalTemplate';
import CopyCompleteModalTemplate from '../common/CopyCompleteModalTemplate';
import LoginModal from '../login/LoginModalTemplate';
import TabMenu from '../main/TabMenu';
import CreateDetails from './createForm/CreateDetails';
import CreateInit from './CreateInit';

const CreateTemplate = () => {
  const { loginModalIsClicked, completeModalIsOpen, copyCompleteModalIsOpen } =
    useSelectModalStates();

  const { orderTimeType } = useSelector(
    (state: RootState) => state.createStates.createData,
  );

  return (
    <React.Fragment>
      {orderTimeType ? <CreateDetails /> : <CreateInit />}
      {loginModalIsClicked ? <LoginModal /> : null}
      {completeModalIsOpen ? <CompleteModalTemplate /> : null}
      {copyCompleteModalIsOpen ? <CopyCompleteModalTemplate /> : null}
      <TabMenu />
    </React.Fragment>
  );
};

export default CreateTemplate;
