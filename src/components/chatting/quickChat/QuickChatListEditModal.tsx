import Image from 'next/image';
import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useSelectLoginStates } from '../../../hooks/select/useSelectLoginStates';
import { RootState } from '../../../modules';
import { patchQuickChattingListActions } from '../../../modules/quick-chatting/actions';
import { QuickChattingListResponse } from '../../../modules/quick-chatting/types';
import palette from '../../../styles/palette';
import QuickChatModalItem from './QuickChatModalItem';
import QuickChatModalTemplate from './QuickChatModalTemplate';

const QuickChatListEditModal = ({
  setIsQuickChatEditModalOpen,
  isQuickChatEditModalOpen,
}: {
  setIsQuickChatEditModalOpen: Dispatch<SetStateAction<boolean>>;
  isQuickChatEditModalOpen: boolean;
}) => {
  const dispatch = useDispatch();
  const { user_id } = useSelectLoginStates();

  const [newChatValue, setNewChatValue] = useState('');

  const { quickChat }: QuickChattingListResponse = useSelector(
    (state: RootState) => state.quickChatStates.quickChatResponse,
  );

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewChatValue(e.target.value);
    },
    [newChatValue],
  );

  const onAddQuickChat = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const validArr = [];
      for (let i = 0; i < quickChat.length; i++) {
        if (quickChat[i].msg) {
          validArr.push(quickChat[i].msg);
        }
      }
      if (validArr.length >= 5) return alert('개수를 초과하였습니다');
      if (!newChatValue) return;

      const newDataList = [...validArr, newChatValue];
      for (let i = newDataList.length; i < 5; i++) {
        newDataList.push('');
      }

      const patchBody = {
        quickChat: newDataList,
        user_id: user_id,
      };

      dispatch(patchQuickChattingListActions.request(patchBody));
      setNewChatValue('');
    },
    [newChatValue, quickChat],
  );

  const onQuickChatModalClose = useCallback(() => {
    setIsQuickChatEditModalOpen(false);
  }, [isQuickChatEditModalOpen]);

  return (
    <QuickChatModalTemplate>
      <TitleContentWrapper>
        <Header>
          <Title>자주쓰는 문구 (최대 5개)</Title>
          <CloseButton onClick={onQuickChatModalClose}>
            <Image
              src={'/assets/images/close.svg'}
              width={20}
              height={20}
              alt="닫기버튼"
            />
          </CloseButton>
        </Header>
        <Wrap>
          {quickChat.map((chatItem) => (
            <QuickChatModalItem key={chatItem.idx} quickChat={chatItem} />
          ))}
        </Wrap>
        <AddForm onSubmit={onAddQuickChat}>
          <AddInput
            type="text"
            placeholder="문구를 입력해주세요"
            onChange={onChangeInput}
            value={newChatValue}
          />
          <AddButton>추가하기</AddButton>
        </AddForm>
      </TitleContentWrapper>
    </QuickChatModalTemplate>
  );
};

const TitleContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h3`
  font-family: 'SpoqaBold';
  color: ${palette.mainOrange};
`;

const CloseButton = styled.button`
  all: unset;
  cursor: pointer;
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
  min-width: 80%;

  outline: none;
  border: none;
`;

const AddButton = styled.button`
  background: ${palette.LightGray2};
  font-size: 0.9375rem;
  border-radius: 10px;
  padding: 10px 15px;

  cursor: pointer;
  border: none;
  outline: none;
`;

export default QuickChatListEditModal;
