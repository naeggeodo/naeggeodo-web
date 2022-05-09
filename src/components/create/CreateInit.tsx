import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

type StyledType = {
  active: boolean;
};

const CreateInit = () => {
  const [selectVal, setSelectVal] = useState('');
  const router = useRouter();
  const buttonValue = [
    '1시간 이내',
    '최대한 빨리',
    '상관없음 (인원이 모집되는대로)',
    '선택하지 않음',
  ];

  return (
    <>
      <Title>언제 음식을</Title>
      <Title>주문하실건가요?</Title>
      <Content>
        <CustomButton>직접입력</CustomButton>
        {buttonValue.map((v, i) => (
          <Button
            key={i}
            onClick={() => {
              setSelectVal(v);
              router.push('/create/directinput');
            }}
            active={selectVal === v ? true : false}>
            {v}
          </Button>
        ))}
      </Content>
    </>
  );
};

const Title = styled.h3`
  font-family: 'SpoqaBold';
  line-height: 36.4px;
  font-size: 1.625rem;
`;

const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  position: absolute;
  bottom: 0;
`;

const CustomButton = styled.button`
  border: none;
  outline: none;
  background: #fff;
  color: ${palette.DarkGray};
  margin-bottom: 10px;
  text-align: right;
`;

const Button = styled.button<StyledType>`
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 0.9375rem;
  font-family: 'SpoqaBold';
  outline: none;
  color: ${(props) => (props.active ? '#EF6212' : '#000')};
  background: ${(props) => (props.active ? '#FDEFE7' : '#f5f5f5')};
`;

export default CreateInit;
