import Image from 'next/image';
import React from 'react';

import styled from 'styled-components';
import profile from '../../assets/img/profile.svg';
import palette from '../../styles/palette';
import CompleteDepositButton from './CompleteDepositButton';

const CheckDepositItem = ({ userNickName }: { userNickName: string }) => {
  return (
    <Container>
      <Image src={profile} width={52} height={52} />
      <NickNameWrapper>{userNickName}</NickNameWrapper>
      <CompleteDepositButton />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const NickNameWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-left: 10px;
  height: 47px;
  font-size: 17px;
  background-color: ${palette.bgGray};
`;

export default CheckDepositItem;
