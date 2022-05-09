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
    <Container>
      <div>
        <CreateTabMenu />
        <Content>
          <Item>
            <TitleWrapper>
              <Title>가게명</Title>
              <OrangeStar>*</OrangeStar>
            </TitleWrapper>
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

          <ChatRoomContainer>
            <TitleWrapper>
              <Title>채팅방 입장 인원</Title>
              <Desc>(최대5명)</Desc>
            </TitleWrapper>

            <CounterContainer>
              <PlusMinusButton>-</PlusMinusButton>
              <div>1</div>
              <PlusMinusButton>+</PlusMinusButton>
            </CounterContainer>
          </ChatRoomContainer>
        </Content>
      </div>

      <CreateButton>내꺼톡 생성하기</CreateButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`;

const Content = styled.div`
  margin-top: 19.5px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px 0;
  border-bottom: 1px solid #f2f2f8;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Title = styled.p`
  font-family: 'SpoqaBold';
`;

const OrangeStar = styled.span`
  font-weight: 500;
  font-size: 0.9375rem;

  color: ${palette.mainOrange};
`;

const Input = styled.input`
  line-height: 16px;
  font-size: 0.9375rem;
  color: ${palette.DarkGray};

  outline: none;
  border: none;
`;

const CreateButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.0625rem;
  height: 52px;

  color: #ffffff;

  background-color: ${palette.LineGray};
  border-radius: 10px;
  cursor: pointer;
`;

const Desc = styled.p`
  font-weight: 500;
  font-size: 0.9375rem;

  color: ${palette.DarkGray};
`;

const ChatRoomContainer = styled(Item)`
  flex-direction: row;
  justify-content: space-between;

  border-bottom: none;
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const PlusMinusButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;

  color: ${palette.TextGray};
  font-weight: 400;
  font-size: 0.9375rem;

  background-color: ${palette.LightGray2};
  border-radius: 5px;
`;

export default CreateForm;
