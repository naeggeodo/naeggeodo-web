import React from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import { RootState } from '../../modules';
import palette from '../../styles/palette';
import { useRouter } from 'next/router';

type StyledType = {
  name: 'title' | 'info';
};

type PropsType = {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ setDrawerOpen }: PropsType) => {
  const router = useRouter();

  const { chatRoomInfo } = useSelector(
    (state: RootState) => state.chattingRoomState,
  );

  return (
    <Container>
      <ContentWrap>
        <PrevButton
          onClick={() => {
            router.push('/');
          }}>
          <Image
            src='/assets/images/prevbtn.svg'
            alt='prev button'
            width={14}
            height={24}
          />
        </PrevButton>
        <StyledImage
          src='/assets/images/hamburger.svg'
          width={44}
          height={44}
        />
        <Div>
          <Info name='title'>{chatRoomInfo?.title}</Info>
          <Info name='info'>인원2명/{chatRoomInfo?.maxCount}명</Info>
        </Div>
        <HambergurButton
          onClick={() => {
            setDrawerOpen(true);
          }}>
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
`;

const StyledImage = styled(Image)`
  display: inline-block;

  border-radius: 10px;
  background-color: #fff;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
