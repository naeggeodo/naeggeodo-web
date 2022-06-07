import React from 'react';
import styled, { css } from 'styled-components';
import { MyPageResponse } from '../../modules/mypage/types';
import palette from '../../styles/palette';

type StyledType = {
  isActive?: boolean;
};

const MypageUserInfo = ({
  myOrdersCount,
  participatingChatCount,
}: MyPageResponse) => {
  return (
    <Container>
      <Title>안녕하세요,</Title>
      <Title>
        <Name>조재연</Name>
        <span>님</span>
      </Title>
      <InfoBox>
        <InfoDiv>
          <P>전체 주문 건수</P>
          <P isActive={true}>{myOrdersCount}건</P>
        </InfoDiv>
        <InfoDiv>
          <P>참여중인 내꺼도</P>
          <P isActive={true}>{participatingChatCount}건</P>
        </InfoDiv>
      </InfoBox>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 24px;

  background-color: #fff;
`;

const Title = styled.p`
  font-size: 1.5rem;
  line-height: 30px;
  padding: 0 6px;
`;

const Name = styled.span`
  font-family: SpoqaBold;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-around;

  margin-top: 16px;
  padding: 24px;

  background: #f5f5f5;
  border-radius: 8px;
  &::before {
    content: '';
    width: 1px;
    height: 46px;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    background: #dddddd;
  }
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const P = styled.p<StyledType>`
  font-size: ${(props) => (props.isActive ? '1.25rem' : '0.875rem')};
  ${(props) =>
    props.isActive &&
    css`
      color: ${palette.mainOrange};
      font-family: 'SpoqaBold';
    `};
`;

export default MypageUserInfo;
