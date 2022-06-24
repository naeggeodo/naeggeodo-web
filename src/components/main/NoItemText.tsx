import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useSelectLoginStates } from '../../hooks/select/useSelectLoginStates';
import palette from '../../styles/palette';

const NoItemText = ({
  checkTokenAndRedirection,
  openAddressAlertModal,
  isAddressModalOpen,
}: {
  checkTokenAndRedirection: (e: React.MouseEvent<HTMLButtonElement>) => void;
  openAddressAlertModal: () => void;
  isAddressModalOpen: boolean;
}) => {
  const { buildingCode } = useSelectLoginStates();
  const { accessToken } = useSelectLoginStates();

  const router = useRouter();

  const onDirection = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      checkTokenAndRedirection(e);
      if (accessToken) {
        if (!buildingCode) {
          return openAddressAlertModal();
        } else {
          router.replace('/create');
        }
      }
    },
    [buildingCode, isAddressModalOpen],
  );
  return (
    <Container>
      <CreateButtonContainer>
        <Text>
          {accessToken
            ? '채팅방이 없어요 먼저 만들어보세요'
            : '로그인을 해주세요'}
          🍟
        </Text>
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
