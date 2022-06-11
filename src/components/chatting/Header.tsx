import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import { RootState } from '../../modules';
import palette from '../../styles/palette';
import { useRouter } from 'next/router';
import Link from 'next/link';

type StyledType = {
  name: 'title' | 'info';
};

type PropsType = {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDrawerOpen: boolean;
};

const Header = ({ setIsDrawerOpen, isDrawerOpen }: PropsType) => {
  const router = useRouter();

  const currentCount = useSelector(
    (state: RootState) => state.chattingRoomState.chatRoomInfo.currentCount,
  );

  const link = useSelector(
    (state: RootState) => state.chattingRoomState.chatRoomInfo.link,
  );

  const title = useSelector(
    (state: RootState) => state.chattingRoomState.chatRoomInfo.title,
  );
  const maxCount = useSelector(
    (state: RootState) => state.chattingRoomState.chatRoomInfo.maxCount,
  );
  const imgPath = useSelector(
    (state: RootState) => state.chattingRoomState.chatRoomInfo.imgPath,
  );

  const moveToBack = useCallback(() => {
    router.back();
  }, [router]);

  const openDrawer = useCallback(() => {
    setIsDrawerOpen(true);
  }, [isDrawerOpen]);

  return (
    <Container>
      <ContentWrap>
        <PrevButton onClick={moveToBack}>
          <Image
            src='/assets/images/prevbtn.svg'
            alt='prev button'
            width={14}
            height={24}
          />
        </PrevButton>
        <StyledImage
          src={imgPath ? imgPath : '/assets/images/hamburger.svg'}
          width={44}
          height={44}
        />
        <Link href={link} passHref>
          <LinkWrapper target='_blank' rel='noopener noreferrer'>
            <Info name='title'>{title}</Info>
            <Info name='info'>
              인원{currentCount}명/{maxCount}명
            </Info>
          </LinkWrapper>
        </Link>
        <HambergurButton onClick={openDrawer}>
          <Image
            src='/assets/images/hambergurbar.svg'
            width={22}
            height={22}
            alt='햄버거 바'
          />
        </HambergurButton>
      </ContentWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 10%;

  background-color: ${palette.black};
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  position: relative;

  width: 90%;
  height: 100%;

  margin: 0 auto;
`;

const PrevButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  padding: 0;

  cursor: pointer;
`;

const StyledImage = styled(Image)`
  display: inline-block;

  border-radius: 10px;
  background-color: #fff;
`;

const LinkWrapper = styled.a`
  display: flex;
  flex-direction: column;

  gap: 5px;
  text-decoration: none;
`;

const Info = styled.p<StyledType>`
  color: #fff;
  line-height: 20px;

  ${(props) =>
    props.name === 'title' &&
    css`
      font-size: 0.9375rem;
    `}

  ${(props) =>
    props.name === 'info' &&
    css`
      font-size: 0.75rem;
    `}
`;

const HambergurButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  position: absolute;
  right: 0;

  padding: 10px;
`;

export default Header;
