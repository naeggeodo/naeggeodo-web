import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../../../modules';
import palette from '../../../styles/palette';
import ReportModalTemplate from './ReportModalTemplate';
import { useLoadLib } from '../../../hooks/utils/useLoadLib';
import {
  setReportConfirmModal,
  submitReportActions,
} from '../../../modules/mypage/actions';
import ModalControlButtons from '../../common/ModalControlButtons';
import CompleteConfirmModal from './CompleteConfirmModal';

const ComplainForm = () => {
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
    dispatch(setReportConfirmModal('complete'));
  };

  const onCancelClick = () => {
    dispatch(setReportConfirmModal('cancel'));
  };

  const onCompleteReport = () => {
    dispatch(submitReportActions.request(complainBody));
  };

  return (
    <ReportModalTemplate>
      <Title>신고하기</Title>
      <ComplainType onChange={onChangeComplainType}>
        <option value="CHATMAIN">채팅방 신고</option>
        <option value="CHATDETAIL">채팅내용 신고</option>
      </ComplainType>
      <Content
        placeholder="신고 내용"
        onChange={onChangecomplainBody}
        value={complainBody.contents}
      />
      <ModalControlButtons
        onCancelClick={onCancelClick}
        onAgreeClick={onCompleteClick}
        activeText={'완료'}
      />
      {reportConfirmModal === 'complete' && (
        <CompleteConfirmModal onAgree={onCompleteReport} />
      )}
    </ReportModalTemplate>
  );
};

const Title = styled.h3`
  font-size: 1.0625rem;
  font-family: 'SpoqaBold';
  color: ${palette.mainOrange};
`;

const ComplainType = styled.select`
  border: 1px solid ${palette.Gray};
  padding: 6px;
  border-radius: 3px;
  font-size: 0.9375rem;
  outline: none;
  cursor: pointer;
`;

const Content = styled.textarea`
  height: 200px;
  padding: 6px;

  font-size: 0.9375rem;

  border: 1px solid ${palette.Gray};
  border-radius: 4px;

  resize: none;
  outline: none;
`;

export default ComplainForm;
