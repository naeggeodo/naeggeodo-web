import React from "react";
import { useSelector } from "react-redux";

import { useLoadLib } from "../../../hooks/utils/useLoadLib";
import { RootState } from "../../../modules";
import { closeReportConfirmModalActions } from "../../../modules/mypage/actions";
import ModalControlButtons from "../../common/ModalControlButtons";
import ConfirmModalTemplate from "./ConfirmModalTemplate";

const CompleteConfirmModal = ({ onAgree }: { onAgree: () => void }) => {
  const { dispatch } = useLoadLib();

  const onCloseModal = () => {
    dispatch(closeReportConfirmModalActions.request());
  };

  return (
    <ConfirmModalTemplate>
      <p>작성을 완료하시겠습니까?</p>
      <ModalControlButtons
        onCancelClick={onCloseModal}
        onAgreeClick={onAgree}
        activeText={"확인"}
      />
    </ConfirmModalTemplate>
  );
};

export default CompleteConfirmModal;
