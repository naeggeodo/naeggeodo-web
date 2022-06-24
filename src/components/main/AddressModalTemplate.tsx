import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const AddressModalTemplate = ({
  closeAddressAlertModal,
  isAddressModalOpen,
}: {
  isAddressModalOpen: boolean;
  closeAddressAlertModal: () => void;
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current.style = 'z-index:10; opacity:1; top:50%';
  }, [isAddressModalOpen]);

  return (
    <Background>
      <Container ref={modalRef}>
        <TitleWrapper>
          <Title>서비스 이용을 위해 주소를 입력해 주세요❗️</Title>
        </TitleWrapper>

        <ButtonContainer>
          <Confirm onClick={closeAddressAlertModal}>확인</Confirm>
        </ButtonContainer>
      </Container>
    </Background>
  );
};

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 90px;

  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s;

  width: 80%;

  opacity: 0;
  z-index: 0;

  padding: 30px 35px;
  border-radius: 5px;

  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
  background-color: white;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 6px;
`;

const Title = styled.p`
  font-family: 'SpoqaBold';
  font-size: 1.375rem;
  line-height: 1.3;

  color: ${palette.black};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Confirm = styled.button`
  all: unset;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 52px;

  background-color: ${palette.mainOrange};
  border-radius: 10px;

  font-size: 1.0625rem;
  line-height: 20px;

  display: flex;
  align-items: center;

  cursor: pointer;

  color: #ffffff;
`;

export default AddressModalTemplate;
