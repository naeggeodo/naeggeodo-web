import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { RootState } from '../../modules';
import palette from '../../styles/palette';
type StyledProps = {
  name: 'title' | 'info';
};
const Header = () => {
  const { chatRoomInfo } = useSelector(
    (state: RootState) => state.chattingRoomState,
  );

  return (
    <Wrap>
      <ContentWrap>
        <Image
          src='/assets/images/prevbtn.svg'
          alt='prev button'
          width={14}
          height={24}
        />
        <StyledImage
          src='/assets/images/hamburger.svg'
          width={44}
          height={44}
        />
        <Div>
          <Info name='title'>{chatRoomInfo.title}</Info>
          <Info name='info'>인원2명/{chatRoomInfo.maxCount}명</Info>
        </Div>
      </ContentWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 10%;

  background-color: ${palette.black};
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 90%;
  height: 100%;

  margin: 0 auto;
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

const Info = styled.p<StyledProps>`
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

export default Header;
