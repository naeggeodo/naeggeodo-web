import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../modules';
import { QuickChattingListResponse } from '../../../modules/chatting/types';
import palette from '../../../styles/palette';
import QuickChatModalItem from './QuickChatModalItem';
import QuickChatModalTemplate from './QuickChatModalTemplate';

const QuickChatListEditModal = () => {
  const [newChatValue, setNewChatValue] = useState('');

  const quickChatList: QuickChattingListResponse = useSelector(
    (state: RootState) => state.chattingRoomState.quickChatList,
  );

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewChatValue(e.target.value);
    },
    [],
  );

  const onAddChat = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newChatValue) return;
  }, []);

  return (
    <QuickChatModalTemplate>
      <Title>자주쓰는 문구</Title>
      <Wrap>
        {/* {quickChatList.quickChat.map((chatItem, i) => (
          <QuickChatModalItem key={i} quickChat={chatItem} />
        ))} */}
        <QuickChatModalItem quickChat={{ idx: 1, msg: '교촌치킨 주세요' }} />
      </Wrap>
      <AddForm onSubmit={onAddChat}>
        <AddInput
          type='text'
          placeholder='문구를 입력해주세요'
          onChange={onChangeInput}
          value={newChatValue}
        />
        <AddButton>추가하기</AddButton>
      </AddForm>
    </QuickChatModalTemplate>
  );
};

export default QuickChatListEditModal;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
`;

const Title = styled.h3`
  color: ${palette.mainOrange};
`;

const AddForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid ${palette.LightGray};
`;

const AddInput = styled.input`
  width: 100%;

  outline: none;
  border: none;

  border: 1px solid red;
`;

const AddButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;

  background: ${palette.LightGray2};
  font-size: 0.9375rem;
  padding: 0 10px;
`;
