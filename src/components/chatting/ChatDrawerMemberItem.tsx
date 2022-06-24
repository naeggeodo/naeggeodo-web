import Image from 'next/image';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { RootState } from '../../modules';
import { setBanUser } from '../../modules/chatting/actions';
import { CurrentChatUser } from '../../modules/chatting/types';
import { openBanModal } from '../../modules/modal/actions';
import palette from '../../styles/palette';

type StyledType = {
  isMe?: boolean;
  isDrawerOpen?: boolean;
};

const ChatDrawerMemberItem = ({ user }: { user: CurrentChatUser }) => {
  const dispatch = useDispatch();

  const master_id = useSelector(
    (state: RootState) => state.chattingRoomState.chatRoomInfo.user_id,
  );

  const banUser = useSelector(
    (state: RootState) => state.chattingRoomState.banUser,
  );

  const { banModalIsOpen } = useSelector(
    (state: RootState) => state.modalStates,
  );
  const my_id = useSelector((state: RootState) => state.loginState.user_id);

  const onMemberClick = useCallback<
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  >(() => {
    if (my_id !== master_id) return;
    if (user.user_id === my_id) return;
    dispatch(setBanUser(user));
    dispatch(openBanModal());
  }, [banModalIsOpen, banUser]);

  return (
    <div>
      <MemberItem key={user.user_id}>
        <FlexWrapper>
          <Image
            src="/assets/images/smileuser.svg"
            width={40}
            height={40}
            alt="프로필"
            objectFit="contain"
          />

          <Nickname isMe={user.user_id === my_id}>{user.nickname}</Nickname>
        </FlexWrapper>
        {master_id === user.user_id ? (
          <Image
            src="/assets/images/king.svg"
            width={25}
            height={25}
            alt="방장 표시 아이콘"
          />
        ) : (
          <EjectButton onClick={onMemberClick}>강퇴하기</EjectButton>
        )}
      </MemberItem>
    </div>
  );
};

const MemberItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  gap: 10px;

  background-color: ${palette.LightGray2};

  border-radius: 10px;

  cursor: pointer;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px 0 0 10px;
  gap: 10px;
`;

const Nickname = styled.p<StyledType>`
  font-size: 0.9375rem;
  ${(props) =>
    props.isMe &&
    css`
      &:before {
        content: '나';

        background: #191919;
        color: #fff;

        border-radius: 5px;
        font-size: 0.625rem;
        padding: 4px;
        margin-right: 4px;
      }
    `}
`;

const EjectButton = styled.button`
  all: unset;
  font-size: 0.8125rem;
  color: #fff;
  background-color: #ff6363;
  padding: 5px;
  border-radius: 5px;
`;

export default ChatDrawerMemberItem;
