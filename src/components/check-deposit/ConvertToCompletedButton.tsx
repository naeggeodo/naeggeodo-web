import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import palette from '../../styles/palette';
import { RootState } from '../../modules';
import axios from 'axios';
import { useSelectLoginStates } from '../../hooks/select/useSelectLoginStates';
import CheckDepositService from '../../service/api/check-deposit/CheckDepositService';

const ConvertToCompletedButton = () => {
  const router = useRouter();
  const { accessToken } = useSelectLoginStates();

  const chatRoomInfo = useSelector(
    (state: RootState) => state.chattingRoomState.chatRoomInfo,
  );

  const [isCompleted, setIsCompleted] = useState<boolean>(
    chatRoomInfo.state === 'END' ? true : false,
  );

  const handleCompleted = useCallback(async () => {
    setIsCompleted(true);
    CheckDepositService.asyncConvertToComplete(router.query.id as string);
  }, [isCompleted, accessToken]);

  return !isCompleted ? (
    <Button onPointerDown={handleCompleted}>채팅방 종료하기</Button>
  ) : (
    <CompletedButton>거래가 완료되었습니다.</CompletedButton>
  );
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
