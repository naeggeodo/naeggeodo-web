import React, { useCallback } from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import palette from '../../styles/palette';
import Link from 'next/link';
import { useCustomRouter } from '../../hooks/utils/useCustomRouter';

type StyledType = {
  name: 'title' | 'info';
};
type StyledProps = {
  max: string;
};

type PropsType = {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDrawerOpen: boolean;
  currentCount: number;
  maxCount: number;
  link: string;
  imgPath: string;
  title: string;
};

const Header = ({
  setIsDrawerOpen,
  isDrawerOpen,
  currentCount,
  maxCount,
  link,
  imgPath,
  title,
}: PropsType) => {
  const { routeBack } = useCustomRouter();

  const openDrawer = useCallback(() => {
    setIsDrawerOpen(true);
  }, [isDrawerOpen]);

  return (
    <Container>
      <ContentWrap>
        <PrevButton onClick={routeBack} title="뒤로가기 버튼">
          <Image
            src="/assets/images/prevbtn.svg"
            alt="뒤로가기 버튼"
            width={14}
            height={24}
          />
        </PrevButton>
        {imgPath && (
          <StyledImage
            src={imgPath}
            width={44}
            height={44}
            alt="채팅방 이미지"
          />
        )}
        <Link href={link || 'http://naeggeodo.com'} passHref>
          <LinkWrapper target="_blank" rel="noopener noreferrer">
            <Info name="title">{title}</Info>
            <Info name="info">
              <StyledCurrent max={currentCount === maxCount ? 'true' : 'false'}>
                현재 {currentCount}명
              </StyledCurrent>
              /{maxCount}명
            </Info>
          </LinkWrapper>
        </Link>
        <HambergurButton onClick={openDrawer}>
          <Image
            src="/assets/images/hamburgerbar.svg"
            width={22}
            height={22}
            alt="메뉴 바"
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

const StyledCurrent = styled.span<StyledProps>`
  color: ${palette.naverGreen};

  ${(props) =>
    props.max === 'true' &&
    css`
      color: red;
    `}
`;

export default Header;
