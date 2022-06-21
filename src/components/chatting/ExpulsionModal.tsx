import { CompatClient } from "@stomp/stompjs";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../../modules";
import { closeBanModal } from "../../modules/modal/actions";
import ModalControlButtons from "../common/ModalControlButtons";
import Portal from "../common/Portal";

const ExpulsionModal = ({ stompClient }: { stompClient: CompatClient }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  const { banModalIsOpen } = useSelector(
    (state: RootState) => state.modalStates
  );

  const banUser = useSelector(
    (state: RootState) => state.chattingRoomState.banUser
  );

  const my_id = useSelector((state: RootState) => state.loginState.user_id);

  const dispatch = useDispatch();

  useEffect(() => {
    modalRef.current.style = "top: 50%; opacity: 1";
  }, []);

  const onModalClose = useCallback(() => {
    dispatch(closeBanModal());
  }, [banModalIsOpen]);

  const onExpulsion = () => {
    const data = {
      chatMain_id: String(router.query.id),
      sender: my_id,
      contents: banUser.user_id,
      type: "BAN",
      nickname: banUser.nickname,
      target_id: banUser.user_id,
    };
    dispatch(closeBanModal());
    stompClient.send("/app/chat/ban", {}, JSON.stringify(data));
  };

  return (
    <Portal selector="reportPortal">
      <Background>
        <ModalContainer ref={modalRef}>
          <Text>강퇴하시겠습니까? </Text>
          <ModalControlButtons
            onCancelClick={onModalClose}
            onAgreeClick={onExpulsion}
            activeText={"강퇴"}
          />
        </ModalContainer>
      </Background>
    </Portal>
  );
};

const Text = styled.p``;

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
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 5px;
  opacity: 0;
  transition: 0.4s;

  width: 80%;
  background: #fff;
  padding: 30px;
`;

export default ExpulsionModal;
