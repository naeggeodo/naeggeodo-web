import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { useLoadLib } from "../../../hooks/utils/useLoadLib";
import { RootState } from "../../../modules";
import {
  setReportConfirmModal,
  submitReportActions,
} from "../../../modules/mypage/actions";
import palette from "../../../styles/palette";
import ModalControlButtons from "../../common/ModalControlButtons";
import CompleteConfirmModal from "./CompleteConfirmModal";
import ReportModalTemplate from "./ReportModalTemplate";

const FeedbackForm = () => {
  const { dispatch } = useLoadLib();

  const { reportConfirmModal } = useSelector(
    (state: RootState) => state.myPageState
  );

  const user_id = useSelector((state: RootState) => state.loginState.user_id);

  const [feedbackBody, setFeedbackBody] = useState({
    user_id: user_id,
    contents: "",
    type: "FEEDBACK",
  });

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedbackBody({ ...feedbackBody, contents: e.target.value });
  };

  const onCompleteClick = () => {
    if (!feedbackBody.contents) {
      return;
    }
    dispatch(dispatch(setReportConfirmModal("complete")));
  };

  const onCancelClick = () => {
    dispatch(dispatch(setReportConfirmModal("cancel")));
  };

  const onCompleteReport = () => {
    dispatch(submitReportActions.request(feedbackBody));
  };

  return (
    <ReportModalTemplate>
      <Title>건의하기</Title>
      <Contents
        placeholder="건의 내용"
        onChange={onChangeContent}
        value={feedbackBody.contents}
      />
      <ModalControlButtons
        onCancelClick={onCancelClick}
        onAgreeClick={onCompleteClick}
        activeText={"완료"}
      />
      {reportConfirmModal === "complete" && (
        <CompleteConfirmModal onAgree={onCompleteReport} />
      )}
    </ReportModalTemplate>
  );
};

export default FeedbackForm;

const Title = styled.h3`
  color: ${palette.mainOrange};
`;

const Contents = styled.textarea`
  height: 200px;
  padding: 6px;

  border: 1px solid ${palette.Gray};

  resize: none;
  outline: none;
`;
