import Image from 'next/image';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useSelectLoginStates } from '../../../hooks/select/useSelectLoginStates';
import { RootState } from '../../../modules';
import { patchQuickChattingListActions } from '../../../modules/quick-chatting/actions';
import {
  QuickChatting,
  QuickChattingListResponse,
} from '../../../modules/quick-chatting/types';

const QuickChatModalItem = ({ quickChat }: { quickChat: QuickChatting }) => {
  const dispatch = useDispatch();
  const { user_id } = useSelectLoginStates();

  const quickChatResponse: QuickChattingListResponse = useSelector(
    (state: RootState) => state.quickChatStates.quickChatResponse,
  );

  const onDeleteQuickChat = () => {
    const newData = quickChatResponse.quickChat.map((item) => {
      if (item.idx === quickChat.idx) return '';
      return item.msg;
    });

    const patchBody = {
      quickChat: newData,
      user_id: user_id,
    };
    dispatch(patchQuickChattingListActions.request(patchBody));
  };

  return (
    <>
      {quickChat.msg !== '' && (
        <Wrap>
          <Message>{quickChat.msg}</Message>
          <RemoveButton onClick={onDeleteQuickChat}>
            <Image src='/assets/images/remove.svg' width={20} height={20} />
          </RemoveButton>
        </Wrap>
      )}
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Message = styled.p`
  width: 90%;
`;

const RemoveButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
`;

export default QuickChatModalItem;
