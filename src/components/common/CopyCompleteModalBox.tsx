import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const CopyCompleteModalBox = () => {
  return (
    <ModalContainer>
      <TitleWrapper>
        <Title>이전에 생성했던 데이터로 채팅방이 생성되었습니다 ✅</Title>
      </TitleWrapper>

      <ButtonContainer>
        <CancelButton>홈으로</CancelButton>
        <GoLogin>채팅방으로 바로 이동하기</GoLogin>
      </ButtonContainer>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  top: 50%;
  left: 50%;

  width: 88%;
  height: 244px;
  z-index: 2;

  padding: 30px;
  border-radius: 5px;
  transform: translate(-50%, -50%);

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

  letter-spacing: 0.35px;

  color: ${palette.black};
`;

const SubTitle = styled.p`
  font-size: 0.9375rem;
  line-height: 150%;

  color: ${palette.black};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const GoLogin = styled.button`
  all: unset;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 60%;
  height: 52px;

  background-color: ${palette.mainOrange};
  border-radius: 10px;

  font-size: 15px;
  line-height: 20px;

  display: flex;
  align-items: center;

  cursor: pointer;

  color: #ffffff;
`;

const CancelButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40%;
  height: 52px;

  background-color: ${palette.bgGray};
  border-radius: 10px;

  cursor: pointer;
`;

export default CopyCompleteModalBox;
