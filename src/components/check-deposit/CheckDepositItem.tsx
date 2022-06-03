import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { CurrentChatUser } from '../../modules/chatting/types';
import palette from '../../styles/palette';
import CompleteDepositButton from './CompleteDepositButton';

const CheckDepositItem = ({ user }: { user: CurrentChatUser }) => {
  return (
    <Container>
      <ImageWrapper>
        <StyledImg
          src='/assets/images/profile.svg'
          layout='fixed'
          width={52}
          height={52}
          objectFit='contain'
        />
      </ImageWrapper>
      <NickNameWrapper>{user.user_id}</NickNameWrapper>
      {/* <CompleteDepositButton user={user} /> */}
      {user.remittanceState === 'N' && <CompleteDepositButton user={user} />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  font-size: 1.0625rem;
  border-radius: 10px 0px 0px 10px;

  & > button {
    margin-left: 3px;
  }
`;

const ImageWrapper = styled.div`
  height: 52px;
`;

const StyledImg = styled(Image)`
  border-radius: 10px 0px 0px 10px;
`;

const NickNameWrapper = styled.div`
  display: flex;
  align-items: center;

  min-width: 115px;
  width: 100%;
  height: 52px;

  padding-left: 10px;
  border-radius: 0px 10px 10px 0px;

  background-color: ${palette.bgGray};
`;

export default CheckDepositItem;
