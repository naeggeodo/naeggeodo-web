import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const ConvertToCompletedButton = () => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleCompleted = useCallback(() => {
    setIsCompleted(true);
  }, [isCompleted]);

  return !isCompleted ? (
    <Button onPointerDown={handleCompleted}>완료된 거래로 전환하기</Button>
  ) : (
    <CompletedButton>거래가 완료되었습니다.</CompletedButton>
  );
};

const Button = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${palette.black};
  border: none;
  outline: none;
  border-radius: 10px;
  font-size: 17px;
  max-height: 70px;
  min-height: 50px;
  min-width: 172px;
  color: #ffffff;
  margin-top: 30px;
`;

const CompletedButton = styled(Button)`
  background-color: ${palette.LightGray};
  cursor: not-allowed;
`;

export default ConvertToCompletedButton;
