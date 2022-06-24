import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import palette from '../../styles/palette';
import { RootState } from '../../modules';
import { useLoadLib } from '../../hooks/utils/useLoadLib';
import { openEndChattingModal } from '../../modules/modal/actions';

const ConvertToCompletedButton = () => {
  const { dispatch } = useLoadLib();
  const { endChattingModalIsOpen } = useSelector(
    (state: RootState) => state.modalStates,
  );

  const handleCompleted = useCallback(async () => {
    dispatch(openEndChattingModal());
  }, [endChattingModalIsOpen]);

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

export default ConvertToCompletedButton;
