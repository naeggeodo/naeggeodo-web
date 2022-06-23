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
      <FlexRow>
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
            width={50}
            height={50}
            alt="채팅방 이미지"
            layout="fixed"
          />
        )}

        <TitleCountContainer>
          <Info name="title">{title}</Info>

          <OrderInfoWrapper>
            <Info name="info">
              <StyledCurrent max={currentCount === maxCount ? 'true' : 'false'}>
                현재 {currentCount}명
              </StyledCurrent>
              /{maxCount}명
            </Info>
            <Link href={link || 'http://naeggeodo.com'}>
              <a target="_blank" rel="noopener noreferrer">
                주문 정보 보러가기
              </a>
            </Link>
          </OrderInfoWrapper>
        </TitleCountContainer>
      </FlexRow>

      <HamburgerButton onClick={openDrawer}>
        <Image
          src="/assets/images/hamburgerbar.svg"
          width={22}
          height={22}
          alt="메뉴 바"
        />
      </HamburgerButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 26px 10px 21px;

  background-color: ${palette.black};
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  width: 100%;
  padding-right: 10px;
`;

const PrevButton = styled.button`
  padding-top: 1%;
  border: none;
  outline: none;
  background: transparent;

  cursor: pointer;
`;

const StyledImage = styled(Image)`
  width: 100%;
  border-radius: 10px;
`;

const TitleCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

const Info = styled.p<StyledType>`
  color: #fff;
  line-height: 20px;

  ${(props) =>
    props.name === 'title' &&
    css`
      width: 100%;
      font-size: 0.9375rem;

      @media (max-width: 590px) {
        width: 90%;
      }
    `}

  ${(props) =>
    props.name === 'info' &&
    css`
      font-size: 0.875rem;
    `}
`;

const OrderInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  width: 100%;
  font-size: 0.9375rem;

  @media (max-width: 590px) {
    width: 90%;
  }

  & > a {
    all: unset;
    padding: 5px 10px;

    color: #fff;
    font-size: 0.8125rem;
    border-radius: 5px;
    background-color: ${palette.lightOrange};
    cursor: pointer;
  }
`;

const HamburgerButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
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
