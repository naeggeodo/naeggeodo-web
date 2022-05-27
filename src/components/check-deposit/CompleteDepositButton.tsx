import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useDeposit } from '../../hooks/useDeposit';
import { getCurrentChatUserListActions } from '../../modules/chatting/actions';
import { CurrentChatUser } from '../../modules/chatting/types';
import palette from '../../styles/palette';
import responsive from '../../styles/responsive';

type StyledType = {
  isDeposit: boolean;
};

const CompleteDepositButton = ({ user }: { user: CurrentChatUser }) => {
  const { onDepositHandler } = useDeposit();
  const router = useRouter();
  const dispatch = useDispatch();

  const onClick = () => {
    onDepositHandler(router.query.id as string, user.user_id).then(() => {
      dispatch(
        getCurrentChatUserListActions.request({
          chattingRoomId: router.query.id as string,
        }),
      );
    });
  };

  return (
    <Button
      isDeposit={user.remittanceState === 'Y' ? true : false}
      onClick={onClick}>
      {user.remittanceState === 'Y' ? '안심번호' : '수령완료'}
    </Button>
  );
};

const Button = styled.button<StyledType>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10%;
  height: 52px;
  max-width: 100px;
  min-width: 80px;

  font-size: 1.0625rem;
  color: ${(props) => (props.isDeposit ? palette.mainOrange : '#fff')};
  background-color: ${(props) =>
    props.isDeposit ? '#fff' : palette.mainOrange};

  border-radius: 10px;
  border: ${(props) =>
    props.isDeposit ? `2px solid ${palette.bgGray}` : 'none'};

  outline: none;

  @media ${responsive.compact} {
    font-size: 0.9375rem;
  }
`;

export default CompleteDepositButton;
