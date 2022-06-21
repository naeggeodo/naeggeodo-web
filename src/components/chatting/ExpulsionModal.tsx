import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../../modules";
import { closeBanModal } from "../../modules/modal/actions";
import ModalControlButtons from "../common/ModalControlButtons";
import Portal from "../common/Portal";

const ExpulsionModal = () => {
  const modalRef = useRef(null);

  const { banModalIsOpen } = useSelector(
    (state: RootState) => state.modalStates
  );

  const dispatch = useDispatch();

  useEffect(() => {
    modalRef.current.style = "top: 50%; opacity: 1";
  }, []);

  const onModalClose = useCallback(() => {
    dispatch(closeBanModal());
  }, [banModalIsOpen]);

  const onExpulsion = () => {
    console.log("강퇴");
    dispatch(closeBanModal());
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
