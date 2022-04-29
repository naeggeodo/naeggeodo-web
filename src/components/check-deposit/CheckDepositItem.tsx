import Image from 'next/image';
import React from 'react';

import styled from 'styled-components';
import palette from '../../styles/palette';
import CompleteDepositButton from './CompleteDepositButton';

const CheckDepositItem = ({ userNickName }: { userNickName: string }) => {
  return (
    <Container>
      <div style={{ height: '52px' }}>
        <StyledImg
          src='/assets/images/profile.svg'
          layout='fixed'
          width={52}
          height={52}
          objectFit='contain'
        />
      </div>
      <NickNameWrapper>{userNickName}</NickNameWrapper>
      <CompleteDepositButton />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  font-size: 1.0625rem;

  & > button {
    margin-left: 3px;
  }
`;

const StyledImg = styled(Image)`
  border-radius: 10px 0px 0px 10px;
`;

const NickNameWrapper = styled.div`
  display: flex;
  align-items: center;

  min-width: 115px;
  width: 90%;
  height: 52px;

  padding-left: 10px;
  border-radius: 0px 10px 10px 0px;

  background-color: ${palette.bgGray};
`;

export default CheckDepositItem;
