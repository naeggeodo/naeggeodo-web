import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { RootState } from '../../modules';

type StyledType = {
  isMe?: boolean;
  isDrawerOpen?: boolean;
};

type PropsType = {
  exit: any;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDrawerOpen: boolean;
  currentCount: number;
};

const ChatDrawer = ({
  exit,
  setIsDrawerOpen,
  isDrawerOpen,
  currentCount,
}: PropsType) => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const { users } = useSelector(
    (state: RootState) => state.chattingRoomState.currentChatUserList,
  );

  const closeDrawer = useCallback<(e: MouseEvent) => void>(
    (e) => {
      setIsDrawerOpen(false);
    },
    [isDrawerOpen],
  );

  const exitChatRoom = () => {
    if (window.confirm('정말 채팅방에서 나가시겠습니까?')) {
      exit();
      router.replace('/');
    }
  };

  // useEffect(() => {
  //   if (isDrawerOpen) {
  //     document.addEventListener('click', closeDrawer);
  //   }
  //   return () => {
  //     document.removeEventListener('click', closeDrawer);
  //   };
  // }, [isDrawerOpen]);

  return (
    <Container isDrawerOpen={isDrawerOpen} ref={containerRef}>
      <Content>
        <Title>내꺼톡 서랍</Title>
        <div>
          <SubTitle>
            <Image
              src='/assets/images/picture.svg'
              width={15}
              height={15}
              alt='사진 아이콘'
            />
            사진
          </SubTitle>
          <ImageList>
            <Image
              src='/assets/images/pizzabg.svg'
              width={55}
              height={55}
              alt='이미지'
              objectFit='contain'
            />
          </ImageList>
        </div>
        <div>
          <SubTitle>
            <Image
              src='/assets/images/people.svg'
              width={15}
              height={15}
              alt='사진 아이콘'
            />
            참여자({currentCount})
          </SubTitle>

          <MemberItemWrapper>
            {users.map((user) => {
              return (
                <MemberItem key={user.user_id}>
                  <Image
                    src='/assets/images/profile.svg'
                    width={40}
                    height={40}
                    alt='프로필'
                    objectFit='contain'
                  />
                  <Nickname>{user.nickname}</Nickname>
                </MemberItem>
              );
            })}
          </MemberItemWrapper>
        </div>
      </Content>
      <Footer>
        <ExitButton onClick={exitChatRoom}>
          <Image
            src='/assets/images/drawerclosebtn.svg'
            width={20}
            height={24}
            alt='서랍 닫기'
          />
          <span>나가기</span>
        </ExitButton>
        <button onClick={() => setIsDrawerOpen(false)}>닫기</button>
      </Footer>
    </Container>
  );
};

const Container = styled.div<StyledType>`
  width: ${(props) => (props.isDrawerOpen ? '70%' : '0')};
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;

  overflow: hidden;
  ${(props) =>
    props.isDrawerOpen &&
    css`
      box-shadow: 0 0 1000px 1000px rgba(0, 0, 0, 0.7);
    `}
  transition: ease-in-out 0.3s;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  width: 100%;
  height: 90%;

  padding: 20px;
  background: #fff;
  border-radius: 10px 0px 0px 0px;
`;

const Title = styled.h3`
  font-family: 'SpoqaBold';
  font-size: 1.0625rem;
`;

const SubTitle = styled.p`
  display: flex;
  gap: 4px;

  margin-bottom: 10px;
  font-size: 0.9375rem;
`;

const NextButton = styled.button`
  position: absolute;
  right: 20px;

  outline: none;
  border: none;
  background: #fff;
  cursor: pointer;
`;

const ImageList = styled.div`
  height: 55px;

  display: flex;
  gap: 2px;

  overflow-y: hidden;
`;

const MemberItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MemberItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  cursor: pointer;
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

const Footer = styled.div`
  width: 100%;
  height: 10%;

  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: space-between;

  padding: 20px;
  border-top: 1px solid #e0e0e0;
  background: #fff;
`;

const Button = styled.button`
  all: unset;
  background: #fff;
  cursor: pointer;
`;

const ExitButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default ChatDrawer;
