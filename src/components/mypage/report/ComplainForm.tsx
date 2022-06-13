import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../../../modules';
import palette from '../../../styles/palette';
import ReportModalTemplate from './ReportModalTemplate';
import { useReport } from '../../../hooks/useReport';
import ConfirmModal from './ConfirmModal';
import ControllButtons from './ControllButtons';
import { useLoadLib } from '../../../hooks/utils/useLoadLib';
import {
  setReportConfirmModal,
  setReportModal,
} from '../../../modules/mypage/actions';

const ComplainForm = () => {
  const { submitReport } = useReport();
  const { dispatch } = useLoadLib();

  const { reportConfirmModal } = useSelector(
    (state: RootState) => state.myPageState,
  );

  const userId = useSelector((state: RootState) => state.loginState.user_id);

  const [complainBody, setComplainBody] = useState({
    user_id: userId,
    contents: '',
    type: 'CHATMAIN',
  });

  const onChangeComplainType = (e: ChangeEvent<HTMLSelectElement>) => {
    setComplainBody({ ...complainBody, type: e.target.value });
  };

  const onChangecomplainBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComplainBody({ ...complainBody, contents: e.target.value });
  };

  const onCompleteClick = () => {
    if (!complainBody.contents) {
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
    submitReport(complainBody).then((res) => {
      console.log(res);
    });
  };

  return (
    <ReportModalTemplate>
      <Title>신고하기</Title>
      <ComplainType onChange={onChangeComplainType}>
        <ComplainTypeItem value='CHATMAIN'>채팅방 신고</ComplainTypeItem>
        <ComplainTypeItem value='CHATDETAIL'>채팅내용 신고</ComplainTypeItem>
      </ComplainType>
      <Content
        placeholder='신고 내용'
        onChange={onChangecomplainBody}
        value={complainBody.contents}
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

export default ComplainForm;

const Title = styled.h3`
  color: ${palette.mainOrange};
`;

const ComplainType = styled.select`
  border: 1px solid ${palette.Gray};
  padding: 6px;
  outline: none;
`;

const ComplainTypeItem = styled.option``;

const Content = styled.textarea`
  height: 200px;
  padding: 6px;

  border: 1px solid ${palette.Gray};

  resize: none;
  outline: none;
`;
