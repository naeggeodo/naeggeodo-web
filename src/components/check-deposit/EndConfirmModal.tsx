import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useLoadLib } from "../../hooks/utils/useLoadLib";
import { RootState } from "../../modules";
import { closeEndChattingModal } from "../../modules/modal/actions";
import CheckDepositService from "../../service/api/check-deposit/CheckDepositService";
import ModalControlButtons from "../common/ModalControlButtons";
import Portal from "../common/Portal";

const EndConfirmModal = () => {
  const { router, dispatch } = useLoadLib();

  const { endChattingModalIsOpen } = useSelector(
    (state: RootState) => state.modalStates
  );

  const onCancel = useCallback(() => {
    dispatch(closeEndChattingModal());
  }, [endChattingModalIsOpen]);

  const onEndChattingRoom = useCallback(() => {
    CheckDepositService.asyncConvertToComplete(router.query.id as string);
    dispatch(closeEndChattingModal());
    router.replace("/chat-rooms");
  }, []);

  return (
    <Portal selector="reportPortal">
      <Background>
        <ModalContainer>
          종료하면 채팅방이 종료되어 참여하실 수 없습니다
          <ModalControlButtons
            onCancelClick={onCancel}
            onAgreeClick={onEndChattingRoom}
            activeText={"종료하기"}
          />
        </ModalContainer>
      </Background>
    </Portal>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.7);

  z-index: 1;

  overflow: hidden;
  touch-action: none;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 5px;

  width: 80%;
  background: #fff;
  padding: 30px;
`;

export default EndConfirmModal;
