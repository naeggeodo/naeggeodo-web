import React from 'react';
import { useSelector } from 'react-redux';

import { useLoadLib } from '../../../hooks/utils/useLoadLib';
import { RootState } from '../../../modules';
import { setReportConfirmModal } from '../../../modules/mypage/actions';
import ConfirmModalTemplate from './ConfirmModalTemplate';
import ControllButtons from './ControllButtons';

const ConfirmModal = ({ onAgree }: { onAgree: () => void }) => {
  const { dispatch } = useLoadLib();
  const { reportConfirmModal } = useSelector(
    (state: RootState) => state.myPageState,
  );

  const onCloseModal = () => {
    dispatch(setReportConfirmModal(''));
  };

  return (
    <ConfirmModalTemplate>
      {reportConfirmModal === 'cancel' ? (
        <p>작성을 취소하겠습니까?</p>
      ) : (
        <p>작성을 완료하시겠습니까?</p>
      )}
      <ControllButtons
        onCancelClick={onCloseModal}
        onAgreeClick={onAgree}
        activeText={'확인'}
      />
    </ConfirmModalTemplate>
  );
};

export default ConfirmModal;
