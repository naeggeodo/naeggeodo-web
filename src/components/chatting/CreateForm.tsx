import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import CreateTabMenu from './CreateTabMenu';

const CreateForm = () => {
  const [inputVal, setInputVal] = useState({
    title: '',
    link: 'http://',
    tag: '',
    population: 1,
  });
  return (
    <>
      <CreateTabMenu />
      <Content>
        <Item>
          <Title>가게명</Title>
          <Input
            type='text'
            value={inputVal.title}
            placeholder='가게이름을 입력해주세요.'
          />
        </Item>
        <Item>
          <Title>가게 링크</Title>
          <Input type='text' value={inputVal.link} />
        </Item>
        <Item>
          <Title>태그</Title>
        </Item>
        <Item>
          <Title>채팅방 입장 인원</Title>
        </Item>
      </Content>
    </>
  );
};

const Content = styled.div`
  margin-top: 19.5px;
`;

const Item = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #f2f2f8;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.p`
  font-family: 'SpoqaBold';
`;

const Input = styled.input`
  line-height: 16px;
  font-size: 0.9375rem;
  color: ${palette.DarkGray};
  outline: none;
  border: none;
`;

export default CreateForm;
