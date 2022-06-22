import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { useLoadLib } from "../../hooks/utils/useLoadLib";
import palette from "../../styles/palette";

import OrderTimeTypeButton from "./OrderTimeTypeButton";
import { buttonValue } from "./data/data";
import { useCreateInit } from "../../hooks/create/useCreateInit";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";

const CreateInit = () => {
  const { dispatch } = useLoadLib();
  const {
    selectOrderTypeTimeInComponent,
    dispatchOrderTimeType,
    selectedOrderTimeType,
  } = useCreateInit(dispatch);

  const router = useRouter();
  const { buildingCode } = useSelector((state: RootState) => state.loginState);

  useLayoutEffect(() => {
    if (!buildingCode) {
      window.confirm("메인페이지 상단에서 현재 위치를 설정하세요");
      router.replace("/chat-rooms");
    }
  }, [buildingCode]);

  return (
    <Container>
      <div>
        <Title>언제 음식을</Title>
        <Title>주문하실건가요?</Title>
      </div>
      <Content>
        {buttonValue.map((item) => (
          <OrderTimeTypeButton
            handleClick={selectOrderTypeTimeInComponent}
            key={item.text}
            dataValue={item.value}
            isActive={selectedOrderTimeType === item.value ? true : false}
          >
            {item.text}
          </OrderTimeTypeButton>
        ))}
        <NextStepButtonContainer>
          <NextStepButton onClick={dispatchOrderTimeType}>
            다음으로 &gt;
          </NextStepButton>
        </NextStepButtonContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: #fff;

  padding: 46px 30px 83px;

  position: relative;

  margin: 0 auto;
`;

const Title = styled.h3`
  font-family: "SpoqaBold";
  padding: 0 6px;
  line-height: 36.4px;
  font-size: 1.625rem;
`;

const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 10px;
`;

const NextStepButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NextStepButton = styled.button`
  padding: 10px 30px;

  font-size: 0.9375rem;
  font-family: "SpoqaBold";

  border-radius: 10px;
  background-color: ${palette.mainOrange};
  color: #fff;

  cursor: pointer;
  border: none;
  outline: none;
`;

export default CreateInit;
