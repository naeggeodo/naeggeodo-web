import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSelectModalStates } from "../../hooks/select/useSelectModalStates";
import { RootState } from "../../modules";
import LoginModal from "../login/LoginModalTemplate";
import TabMenu from "../main/TabMenu";
import CreateCompleteAlertModal from "./CreateCompleteAlertModal";
import CreateDetails from "./createForm/CreateDetails";
import CreateInit from "./CreateInit";

const CreateTemplate = () => {
  const { loginModalIsClicked } = useSelectModalStates();

  const { orderTimeType } = useSelector(
    (state: RootState) => state.createStates.createData
  );

  const { completeModalIsOpen } = useSelector(
    (state: RootState) => state.modalStates
  );

  return (
    <React.Fragment>
      {orderTimeType ? <CreateDetails /> : <CreateInit />}
      {loginModalIsClicked ? <LoginModal /> : null}
      {completeModalIsOpen ? <CreateCompleteAlertModal /> : null}
      <TabMenu />
    </React.Fragment>
  );
};

export default CreateTemplate;
