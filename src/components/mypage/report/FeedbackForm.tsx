import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { useLoadLib } from '../../../hooks/utils/useLoadLib';
import { RootState } from '../../../modules';
import {
  setReportConfirmModal,
  setReportModal,
  submitReportActions,
} from '../../../modules/mypage/actions';
import palette from '../../../styles/palette';
import ConfirmModal from './ConfirmModal';
import ControllButtons from './ControllButtons';
import ReportModalTemplate from './ReportModalTemplate';

const FeedbackForm = () => {
  const { dispatch } = useLoadLib();

  const { reportConfirmModal } = useSelector(
    (state: RootState) => state.myPageState,
  );

  const user_id = useSelector((state: RootState) => state.loginState.user_id);

  const [feedbackBody, setFeedbackBody] = useState({
    user_id: user_id,
    contents: '',
    type: 'FEEDBACK',
  });

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedbackBody({ ...feedbackBody, contents: e.target.value });
  };

  const onCompleteClick = () => {
    if (!feedbackBody.contents) {
      return;
    }
    dispatch(dispatch(setReportConfirmModal('complete')));
  };

  const onCancelClick = () => {
    dispatch(dispatch(setReportConfirmModal('cancel')));
  };
  const onAllModalClose = () => {
    dispatch(dispatch(setReportConfirmModal('')));
    dispatch(dispatch(setReportModal('')));
  };

  const onCompleteReport = () => {
    dispatch(submitReportActions.request(feedbackBody));
  };

  return (
    <ReportModalTemplate>
      <Title>건의하기</Title>
      <Contents
        placeholder='건의 내용'
        onChange={onChangeContent}
        value={feedbackBody.contents}
      />
      <ControllButtons
        onCancelClick={onCancelClick}
        onAgreeClick={onCompleteClick}
        activeText={'완료'}
      />
      {reportConfirmModal === 'cancel' && (
        <ConfirmModal onAgree={onAllModalClose} />
      )}
      {reportConfirmModal === 'complete' && (
        <ConfirmModal onAgree={onCompleteReport} />
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

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const CompleteButton = styled.button`
  width: 60%;

  background: ${palette.mainOrange};
  color: #fff;

  outline: none;
  border: none;
  cursor: pointer;

  border-radius: 10px;
  padding: 6px;
  margin: 0 auto;
`;

const CancelButton = styled.button`
  width: 40%;

  background-color: ${palette.bgGray};
  border-radius: 10px;

  outline: none;
  border: none;
  cursor: pointer;

  padding: 6px;
  margin: 0 auto;
`;
