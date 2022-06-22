import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { useLoadLib } from "../../../hooks/utils/useLoadLib";
import { RootState } from "../../../modules";
import { closeReportConfirmModalActions } from "../../../modules/mypage/actions";
import palette from "../../../styles/palette";
import ConfirmModalTemplate from "./ConfirmModalTemplate";

const CancelConfirmModal = ({ onAgree }: { onAgree: () => void }) => {
  const { dispatch } = useLoadLib();

  const onCloseModal = () => {
    dispatch(closeReportConfirmModalActions.request());
  };

  return (
    <ConfirmModalTemplate>
      <p>작성을 취소하겠습니까?</p>
      <Container>
        <CancelButton onClick={onAgree}>예</CancelButton>
        <CompleteButton onClick={onCloseModal}>아니오</CompleteButton>
      </Container>
    </ConfirmModalTemplate>
  );
};

export default CancelConfirmModal;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const CompleteButton = styled.button`
  width: 50%;
  height: 60px;

  font-size: 0.9375rem;

  background-color: ${palette.bgGray};
  color: #000;

  outline: none;
  border: none;
  cursor: pointer;

  border-radius: 10px;
  padding: 6px;
  margin: 0 auto;
`;

const CancelButton = styled.button`
  width: 50%;

  height: 60px;
  font-size: 0.9375rem;

  background: ${palette.lightOrange};
  color: #fff;

  border-radius: 10px;

  outline: none;
  border: none;
  cursor: pointer;

  padding: 6px;
  margin: 0 auto;
`;
