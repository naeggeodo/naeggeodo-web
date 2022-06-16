import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import palette from '../../styles/palette';
import responsive from '../../styles/responsive';
import CheckDepositItem from './CheckDepositItem';
import ConvertToCompletedButton from './ConvertToCompletedButton';
import { CurrentChatUser } from '../../modules/chatting/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { useCustomRouter } from '../../hooks/utils/useCustomRouter';

const CheckDepositTemplate = () => {
  const { routeBack } = useCustomRouter();
  const { currentChatUserList } = useSelector(
    (state: RootState) => state.chattingRoomState,
  );

  const [depositYetUsers, setDepositYetUsers] = useState<CurrentChatUser[]>([]);
  const [depositUsers, setDepositUsers] = useState<CurrentChatUser[]>([]);

  useEffect(() => {
    if (!currentChatUserList?.users) return;
    setDepositYetUsers(
      currentChatUserList.users.filter((v) => v.remittanceState === 'N'),
    );
    setDepositUsers(
      currentChatUserList.users.filter((v) => v.remittanceState === 'Y'),
    );
  }, [currentChatUserList]);

  return (
    <Container>
      <TitleContainer>
        <PrevButton onClick={routeBack} title='뒤로가기 버튼'>
          <Image
            src='/assets/images/prevbtn.svg'
            width={11}
            height={24}
            layout='fixed'
            alt='뒤로가기 버튼'
          />
        </PrevButton>
        <Title>돈을 받으셨나요?</Title>
        <P>
          버튼을 누르면
          <br />
          참여멤버의 안심번호를 확인할 수 있어요.
        </P>
        <Notice>수령체크 후 미수령으로 전환이 어렵습니다.</Notice>
      </TitleContainer>

      <div>
        <DepositUserList>
          {depositYetUsers.length > 0 && (
            <SmallTitle>아직 못받았어요.</SmallTitle>
          )}
          {depositYetUsers.length > 0 &&
            depositYetUsers.map((user) => (
              <CheckDepositItem key={user.user_id} user={user} />
            ))}
        </DepositUserList>
        <DepositYetUsers>
          <SmallTitle>
            {depositYetUsers.length === 0 && '모두에게 돈을 받았어요'}
            {depositYetUsers.length > 0 &&
              depositUsers.length > 0 &&
              '돈을 보낸 멤버들'}
          </SmallTitle>
          {depositUsers.length > 0 &&
            depositUsers.map((user) => (
              <CheckDepositItem key={user.idx} user={user} />
            ))}
        </DepositYetUsers>
        {depositUsers.length > 0 && <ConvertToCompletedButton />}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;

  width: 100%;
  height: 100vh;

  font-size: 1.0625rem;

  padding: 20px 30px;

  @media ${responsive.compact} {
    font-size: 0.9375rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const P = styled.p`
  line-height: 1.5;

  &::before {
    content: '수령완료 ';
    color: ${palette.black};
  }
`;

const PrevButton = styled.button`
  width: 40px;
  text-align: left;
  background-color: #fff;

  outline: none;
  border: none;
  cursor: pointer;
`;

const Title = styled.p`
  font-family: 'SpoqaBold';
  font-size: 1.625rem;
  color: ${palette.black};

  letter-spacing: 0.35px;
`;

const Notice = styled.p`
  color: #db0202;
`;

const DepositUserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DepositYetUsers = styled(DepositUserList)`
  margin-top: 39px;
`;

const SmallTitle = styled.p`
  font-weight: 500;
  font-size: 0.75rem;
  color: ${palette.DarkGray};
  text-align: center;
`;

export default CheckDepositTemplate;
