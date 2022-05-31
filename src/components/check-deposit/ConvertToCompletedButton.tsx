import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { useDeposit } from '../../hooks/useDeposit';
import palette from '../../styles/palette';
import { RootState } from '../../modules';

const ConvertToCompletedButton = () => {
  const { convertToComplete } = useDeposit();
  const router = useRouter();

  const { chatRoomInfo } = useSelector(
    (state: RootState) => state.chattingRoomState,
  );

  const [isCompleted, setIsCompleted] = useState<boolean>(
    chatRoomInfo.state === 'END' ? true : false,
  );

  const handleCompleted = useCallback(() => {
    setIsCompleted(true);
    convertToComplete(router.query.id as string);
  }, [isCompleted]);

  return !isCompleted ? (
    <Button onPointerDown={handleCompleted}>완료된 거래로 전환하기</Button>
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
