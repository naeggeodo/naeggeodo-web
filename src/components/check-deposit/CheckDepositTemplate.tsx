import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import palette from '../../styles/palette';
import responsive from '../../styles/responsive';
import CheckDepositItem from './CheckDepositItem';
import ConvertToCompletedButton from './ConvertToCompletedButton';
import { CurrentChatUser } from '../../modules/chatting/types';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

const CheckDepositTemplate = () => {
  const router = useRouter();

  const { currentChatUserList } = useSelector(
    (state: RootState) => state.chattingRoomState,
  );

  const { users } = currentChatUserList;

  const [depositYetUsers, setDepositYetUsers] = useState<CurrentChatUser[]>([]);
  const [depositUsers, setDepositUsers] = useState<CurrentChatUser[]>([]);

  useEffect(() => {
    if (!users) return;
    setDepositYetUsers([]);
    setDepositUsers([]);
    for (let i = 0; i < users.length; i++) {
      if (users[i].remittanceState === 'N') {
        setDepositYetUsers((prev) => prev.concat(users[i]));
      } else {
        setDepositUsers((prev) => prev.concat(users[i]));
      }
    }
  }, [currentChatUserList]);

  return (
    <Container>
      <TitleContainer>
        <PrevButton
          onClick={() => {
            router.push(`/chatting/${router.query.id}`);
          }}>
          <Image
            src='/assets/images/prevbtn.svg'
            width={11}
            height={24}
            layout='fixed'
          />
        </PrevButton>
        <Title>돈을 받으셨나요?</Title>
        <P style={{ lineHeight: 1.5 }}>
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
            depositYetUsers.map((v) => (
              <CheckDepositItem key={v.idx} user={v} />
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
            depositUsers.map((v) => <CheckDepositItem key={v.idx} user={v} />)}
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
  &::before {
    content: '수령완료 ';
    color: ${palette.mainOrange};
  }
`;

const PrevButton = styled.button`
  width: 40px;
  text-align: left;
  border: none;
  outline: none;
  background: #fff;
`;

const Title = styled.p`
  font-family: 'SpoqaBold';
  font-size: 1.625rem;
  color: ${palette.black};

  letter-spacing: 0.35px;
`;

const Notice = styled.p`
  color: ${palette.Gray};
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
