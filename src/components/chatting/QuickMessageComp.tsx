import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import setting from '../../assets/icons/setting.svg';
import slidedown from '../../assets/icons/slidedown.svg';
import { useSlideMessage } from '../../hooks/useSlideMessage';
import palette from '../../styles/palette';
const QuickMessageComp = () => {
  const target = useRef<HTMLDivElement>(null);
  const slideBar = useRef<HTMLDivElement>(null);
  const { slideEvent } = useSlideMessage();

  useEffect(() => {
    slideEvent(slideBar, target);
  }, []);

  return (
    <Wrap ref={target}>
      <Div ref={slideBar}>
        <Image src={slidedown} alt='icon' width={36} height={3} />
      </Div>
      <Item>안녕하세요. 지금 주문 가능하신가요?</Item>
      <Item>백석고등학교 정문 앞에서 만나고 싶습니다.</Item>
      <Item>잠시 메뉴를 고르겠습니다. 2분만 기다려주세요!</Item>
      <EditBtn>
        <p>편집하기</p>
        <Image src={setting} alt='setting icon' width={15} height={20} />
      </EditBtn>
    </Wrap>
  );
};

export default QuickMessageComp;
const Wrap = styled.div`
  width: 100%;
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
