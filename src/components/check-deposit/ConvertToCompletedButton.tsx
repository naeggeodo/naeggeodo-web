import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import palette from "../../styles/palette";
import { RootState } from "../../modules";
import { useSelectLoginStates } from "../../hooks/select/useSelectLoginStates";
import CheckDepositService from "../../service/api/check-deposit/CheckDepositService";
import { useLoadLib } from "../../hooks/utils/useLoadLib";
import { openEndChattingModal } from "../../modules/modal/actions";

const ConvertToCompletedButton = () => {
  const { router, dispatch } = useLoadLib();
  // const { accessToken } = useSelectLoginStates();

  const { endChattingModalIsOpen } = useSelector(
    (state: RootState) => state.modalStates
  );

  // const chatRoomInfo = useSelector(
  //   (state: RootState) => state.chattingRoomState.chatRoomInfo
  // );

  // const [isCompleted, setIsCompleted] = useState<boolean>(
  //   chatRoomInfo.state === "END" ? true : false
  // );

  const handleCompleted = useCallback(async () => {
    dispatch(openEndChattingModal());
    // CheckDepositService.asyncConvertToComplete(router.query.id as string);
  }, [endChattingModalIsOpen]);

  // return !isCompleted ? (
  //   <Button onPointerDown={handleCompleted}>채팅방 종료하기</Button>
  // ) : (
  //   <CompletedButton>거래가 완료되었습니다.</CompletedButton>
  // );
  return <Button onPointerDown={handleCompleted}>채팅방 종료하기</Button>;
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-height: 70px;
  min-height: 50px;
  min-width: 172px;

  border-radius: 10px;

  font-size: 1.0625rem;
  color: #ffffff;
  background-color: ${palette.black};

  margin-top: 30px;

  border: none;
  cursor: pointer;
  outline: none;
`;

const CompletedButton = styled(Button)`
  background-color: ${palette.LightGray};
  cursor: not-allowed;
`;

export default ConvertToCompletedButton;
