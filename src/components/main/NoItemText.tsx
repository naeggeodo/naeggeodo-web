import React, { useCallback } from "react";
import styled from "styled-components";
import { useSelectLoginStates } from "../../hooks/select/useSelectLoginStates";
import palette from "../../styles/palette";

const NoItemText = ({
  checkTokenAndRedirection,
  openAddressAlertModal,
  isAddressModalOpen,
}: {
  checkTokenAndRedirection: (e: React.MouseEvent<HTMLButtonElement>) => void;
  openAddressAlertModal: () => void;
  isAddressModalOpen: boolean;
}) => {
  const { address, buildingCode } = useSelectLoginStates();

  const onDirection = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (!address || !buildingCode) {
        return openAddressAlertModal();
      }
      checkTokenAndRedirection(e);
    },
    [address, buildingCode, isAddressModalOpen]
  );
  return (
    <Container>
      <CreateButtonContainer>
        <Text>채팅방이 없어요 먼저 만들어보세요 🍟</Text>
        <CreateButton onClick={onDirection}>채팅방 생성하러가기</CreateButton>
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
