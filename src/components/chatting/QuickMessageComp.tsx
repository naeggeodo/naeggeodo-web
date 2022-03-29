import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import setting from '../../assets/icons/setting.svg';
import slidedown from '../../assets/icons/slidedown.svg';
import palette from '../../styles/palette';
const QuickMessageComp = () => {
  const target = useRef(null);
  const slideBar = useRef(null);
  let initialY = 0;
  let currentY = 0;
  useEffect(() => {
    if (window.PointerEvent) {
      slideBar.current.addEventListener('pointerdown', grabDown);
      slideBar.current.addEventListener('pointermove', grabMove);
    } else {
      slideBar.current.addEventListener('mousedown', grabDown);
      slideBar.current.addEventListener('mousemove', grabMove);
    }
    return () => {
      slideBar.current.removeEventListener('pointerdown', grabDown);
      slideBar.current.removeEventListener('pointermove', grabMove);
      slideBar.current.removeEventListener('mousedown', grabDown);
      slideBar.current.removeEventListener('mousemove', grabMove);
    };
  }, []);
  const grabDown = (e: PointerEvent | MouseEvent) => {
    initialY = e.pageY;
  };
  const grabMove = (e: PointerEvent | MouseEvent) => {
    if (initialY > 0) {
      console.log('move');
      currentY = e.pageY;
      if (currentY > initialY) {
        target.current.style.height = `${200 - (currentY - initialY)}px`;
        if (currentY - initialY > 50) {
          target.current.style.height = '30px';
          initialY = 0;
        }
      } else {
        target.current.style.height = `${30 + (initialY - currentY)}px`;
        if (initialY - currentY > 50) {
          target.current.style.height = '200px';
          initialY = 0;
        }
      }
    }
  };

  return (
    <Wrap ref={target}>
      <Div ref={slideBar}>
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
  /* min-height: 30%; */
  max-height: 200px;
  background: #fff;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  border-radius: 20px 20px 0px 0px;
  padding: 0 6% 14px;
  touch-action: none;
  & > img {
    display: block;
    margin: 0 auto;
  }
  border-bottom: 1px solid ${palette.LineGray};
`;
const Div = styled.div`
  padding-top: 10px;
  padding-bottom: 22px;
  text-align: center;
  cursor: grab;
  touch-action: none;
`;
const Item = styled.p`
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 22px;
  cursor: pointer;
`;
const EditBtn = styled.button`
  color: #ef6212;
  outline: none;
  border: none;
  font-size: 12px;
  background: transparent;
  cursor: pointer;
  display: flex;
  gap: 3px;
  align-items: center;
  padding: 0;
`;
