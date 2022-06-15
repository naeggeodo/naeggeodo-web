import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { useLoadLib } from '../../hooks/utils/useLoadLib';
import { RootState } from '../../modules';
import { openExitModal } from '../../modules/modal/actions';
import palette from '../../styles/palette';

type StyledType = {
  isMe?: boolean;
  isDrawerOpen?: boolean;
};

type PropsType = {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDrawerOpen: boolean;
  currentCount: number;
  masterId: string;
};

const ChatDrawer = ({
  setIsDrawerOpen,
  isDrawerOpen,
  currentCount,
  masterId,
}: PropsType) => {
  const { dispatch, router } = useLoadLib();
  const containerRef = useRef<HTMLDivElement>(null);

  const { users } = useSelector(
    (state: RootState) => state.chattingRoomState.currentChatUserList,
  );
  const imageList = useSelector(
    (state: RootState) => state.chattingRoomState.imageList,
  );
  const my_id = useSelector((state: RootState) => state.loginState.user_id);

  const closeDrawer = useCallback<
    (e: React.MouseEvent<HTMLButtonElement>) => void
  >(
    (e) => {
      setIsDrawerOpen(false);
    },
    [isDrawerOpen],
  );

  const exitChatRoom = useCallback(() => {
    dispatch(openExitModal());
  }, [dispatch]);

  return (
    <Container isDrawerOpen={isDrawerOpen} ref={containerRef}>
      <Content>
        <Title>
          <span style={{ color: `${palette.mainOrange}` }}>내꺼톡</span> 서랍
        </Title>
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
            {imageList.length === 0 ? (
              <PhotoText>업로드된 최신 사진이 없습니다.</PhotoText>
            ) : (
              imageList.map((image) => {
                return (
                  <Image
                    style={{
                      backgroundColor: `${palette.Gray}`,
                      borderRadius: '10px',
                    }}
                    src={image}
                    width={60}
                    height={50}
                  />
                );
              })
            )}
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
                <React.Fragment key={user.user_id}>
                  <MemberItem key={user.user_id}>
                    <FlexWrapper>
                      <Image
                        src='/assets/images/profile.svg'
                        width={40}
                        height={40}
                        alt='프로필'
                        objectFit='contain'
                      />

                      <Nickname isMe={user.user_id === my_id}>
                        {user.nickname}
                      </Nickname>
                    </FlexWrapper>

                    {masterId === user.user_id && (
                      <Image
                        src='/assets/images/king.svg'
                        width={25}
                        height={25}></Image>
                    )}
                  </MemberItem>
                </React.Fragment>
              );
            })}
          </MemberItemWrapper>
        </div>
      </Content>
      <Footer>
        <CloseButton onClick={closeDrawer}>
          <Image src='/assets/images/close.svg' width={20} height={20}></Image>
        </CloseButton>
        <ExitButton onClick={exitChatRoom}>
          <Image
            src='/assets/images/drawerclosebtn.svg'
            width={20}
            height={24}
            alt='서랍 닫기'
          />
          <span>나가기</span>
        </ExitButton>
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

const ImageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

const MemberItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MemberItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  gap: 10px;

  background-color: ${palette.LightGray2};
  border-radius: 0 10px 10px 0;

  cursor: pointer;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
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

const Footer = styled.div`
  width: 100%;
  height: 10%;

  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;
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

const PhotoText = styled.div`
  font-size: 0.8125rem;
  color: ${palette.black};
`;

const CloseButton = styled.button`
  all: unset;
  cursor: pointer;
`;

export default ChatDrawer;
