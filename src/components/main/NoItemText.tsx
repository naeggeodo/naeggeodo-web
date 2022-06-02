import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const NoItemText = ({
  checkTokenAndRedirection,
}: {
  checkTokenAndRedirection: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <Container>
      <CreateButtonContainer>
        <Text>지금 직접 채팅방을 생성해보세요 🍟</Text>
        <CreateButton onClick={checkTokenAndRedirection}>
          채팅방 생성하러가기
        </CreateButton>
      </CreateButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80vh;
`;

const CreateButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Text = styled.p`
  font-size: 1.3125rem;
`;

const CreateButton = styled.button`
  all: unset;
  border-radius: 10px;
  height: 40px;
  padding: 0 15px;

  background-color: ${palette.mainOrange};
  color: #ffffff;

  cursor: pointer;
`;

export default NoItemText;
