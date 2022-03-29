import { useRef, useState } from 'react';
import styled from 'styled-components';
import setting from '../../assets/icons/setting.svg';
import slidedown from '../../assets/icons/slidedown.svg';
const QuickMessageComp = () => {
  const target = useRef(null);

  //// 보류
  return (
    <Wrap ref={target}>
      <Div>
        <img src={slidedown} alt='icon' />
      </Div>
      <Item>안녕하세요. 지금 주문 가능하신가요?</Item>
      <Item>백석고등학교 정문 앞에서 만나고 싶습니다.</Item>
      <Item>잠시 메뉴를 고르겠습니다. 2분만 기다려주세요!</Item>
      <EditBtn>
        <p>편집하기</p>
        <img src={setting} alt='setting icon' />
      </EditBtn>
    </Wrap>
  );
};

export default QuickMessageComp;
const Wrap = styled.div`
  width: 100%;
  min-height: 30%;
  background: #fff;
  position: absolute;
  bottom: 0;
  border-radius: 20px 20px 0px 0px;
  padding: 0 3%;
  & > img {
    display: block;
    margin: 0 auto;
  }
`;
const Div = styled.div`
  padding-top: 10px;
  padding-bottom: 26px;
  text-align: center;
`;
const Item = styled.p`
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 22px;
`;
const EditBtn = styled.button`
  color: #ef6212;
  outline: none;
  border: none;
  font-size: 12px;
  background: transparent;
  cursor: pointer;
  display: flex;
  border: 1px solid red;
  align-items: center;
`;
