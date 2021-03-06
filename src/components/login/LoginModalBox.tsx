import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useLoadLib } from '../../hooks/utils/useLoadLib';
import { closeLoginModal } from '../../modules/modal/actions';
import palette from '../../styles/palette';

const LoginModalBox = () => {
  const { router, dispatch } = useLoadLib();
  const modalRef = useRef(null);

  const moveLoginPage = useCallback(() => {
    router.replace('/login');
  }, [router]);

  const cancelLogin = useCallback(() => {
    dispatch(closeLoginModal());
  }, [dispatch]);

  useEffect(() => {
    modalRef.current.style = 'top:50%; opacity:1';
  }, []);

  return (
    <ModalContainer ref={modalRef}>
      <TitleWrapper>
        <Title>로그인이 필요합니다.</Title>
        <SubTitle>취소 버튼을 누를 시 서비스 이용이 어렵습니다.</SubTitle>
      </TitleWrapper>

      <ButtonContainer>
        <CancelButton onClick={cancelLogin}>취소</CancelButton>
        <GoLogin onClick={moveLoginPage}>로그인하기</GoLogin>
      </ButtonContainer>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  top: 30%;
  left: 50%;

  width: 88%;
  height: 244px;
  opacity: 0;
  z-index: 2;

  padding: 30px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  transition: 0.5s;

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

export default LoginModalBox;
