import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getCurrentChatUserListActions } from '../../modules/chatting/actions';
import { CurrentChatUser } from '../../modules/chatting/types';
import CheckDepositService from '../../service/api/check-deposit/CheckDepositService';
import palette from '../../styles/palette';
import responsive from '../../styles/responsive';

const CompleteDepositButton = ({ user }: { user: CurrentChatUser }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const onClick = () => {
    CheckDepositService.asyncDepositHandler(
      router.query.id as string,
      user.user_id,
    ).then(() => {
      dispatch(
        getCurrentChatUserListActions.request({
          chattingRoomId: router.query.id as string,
        }),
      );
    });
  };

  return <Button onClick={onClick}>수령완료</Button>;
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10%;
  height: 52px;
  max-width: 100px;
  min-width: 80px;

  font-size: 1.0625rem;
  color: #fff;
  background-color: ${palette.mainOrange};

  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;

  @media ${responsive.compact} {
    font-size: 0.9375rem;
  }
`;

export default CompleteDepositButton;
