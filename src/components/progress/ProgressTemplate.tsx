import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import TabMenu from '../main/TabMenu';

const ProgressTemplate = () => {
  return (
    <React.Fragment>
      <Container>
        <Title>내꺼톡 리스트</Title>

        <ProgressTalkList>
          <ProgressTalkItem>
            <ImageContainer>
              <Image
                src='/assets/images/hamburger.svg'
                height={50}
                width={50}
              />
            </ImageContainer>

            <TextContainer>
              <TimeTitleWrapper>
                <p>버거킹 백석 이마트점</p>
                <p>오후 9:20</p>
              </TimeTitleWrapper>

              <Contents>
                <p>105동 정문에서 수령하시면 됩니다.</p>
              </Contents>
            </TextContainer>
          </ProgressTalkItem>
        </ProgressTalkList>
      </Container>
      <TabMenu />
    </React.Fragment>
  );
};

const Container = styled.div`
  padding: 46px 0 0;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 1.125rem;
  padding: 0 24px;

  letter-spacing: -0.5px;
  color: ${palette.black};
`;

const ImageContainer = styled.div`
  display: inline-block;
  padding: 2px;
  border: 1px solid ${palette.LineGray};
  border-radius: 10px;
`;

const ProgressTalkList = styled.ul`
  padding: 5px 0;
`;

const ProgressTalkItem = styled.li`
  display: flex;
  gap: 10px;

  padding: 24px;

  cursor: pointer;

  &:hover {
    background-color: ${palette.bgGray};
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 5px 0;
`;

const TimeTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  // ** 채팅방 제목 **
  & > p:first-child {
    font-family: 'SpoqaBold';
    font-size: 0.9375rem;
    color: #000000;
  }

  // ** 시간 **
  & > p:nth-of-type(2) {
    font-weight: 500;
    font-size: 0.75rem;
    color: ${palette.TextGray};
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;

  // ** 마지막 채팅 내용 **
  & > p {
    font-size: 0.875rem;
    line-height: 150%;

    color: ${palette.DarkGray};
  }
`;

export default ProgressTemplate;
