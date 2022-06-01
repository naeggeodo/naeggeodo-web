import Image from 'next/image';
import styled, { css } from 'styled-components';
import palette from '../../styles/palette';
import TabMenu from '../main/TabMenu';

type StyledType = {
  isActive?: boolean;
};

const MoreTemplate = () => {
  return (
    <>
      <Wrap>
        <FirstSection>
          <Title>안녕하세요,</Title>
          <Title>
            <Name>조재연</Name>
            <span>님</span>
          </Title>
          <InfoBox>
            <InfoDiv>
              <P>최근 3개월간 주문</P>
              <P isActive={true}>4건</P>
            </InfoDiv>
            <InfoDiv>
              <P>참여중인 내꺼도</P>
              <P isActive={true}>3건</P>
            </InfoDiv>
          </InfoBox>
        </FirstSection>
        <Bar />

        <SecondSection>
          <SectionTitle>고객센터</SectionTitle>
          <MenuItem>
            <Image
              src='/assets/images/doc.svg'
              width={17}
              height={20}
              alt='메뉴 아이콘'
            />
            공지사항
          </MenuItem>
          <MenuItem>
            <Image
              src='/assets/images/message.svg'
              width={20}
              height={20}
              alt='메뉴 아이콘'
            />
            건의하기
          </MenuItem>
          <MenuItem>
            <Image
              src='/assets/images/caution.svg'
              width={19}
              height={20}
              alt='메뉴 아이콘'
            />
            신고내역 확인
          </MenuItem>
        </SecondSection>
        <ThirdSection>
          <SectionTitle>이용약관</SectionTitle>
          <MenuItem>
            <Image
              src='/assets/images/terms.svg'
              width={20}
              height={20}
              alt='메뉴 아이콘'
            />
            이용약관
          </MenuItem>
          <MenuItem>
            <Image
              src='/assets/images/userinfo.svg'
              width={20}
              height={20}
              alt='메뉴 아이콘'
            />
            개인정보 처리방침
          </MenuItem>
        </ThirdSection>
      </Wrap>
      <TabMenu />
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #fff;
  padding: 46px 0 83px;
`;

const FirstSection = styled.div`
  padding: 0 24px;
`;

const SecondSection = styled.div`
  margin-top: 30px;
  padding: 0 24px;
`;

const ThirdSection = styled.div`
  margin-top: 30px;
  padding: 0 24px;
`;

const Bar = styled.div`
  height: 8px;
  margin-top: 20px;

  background-color: ${palette.LightGray2};
  opacity: 0.5;
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

const SectionTitle = styled.h3`
  color: ${palette.TextGray};
  font-family: 'SpoqaBold';
  font-size: 0.9375rem;
`;

const MenuItem = styled.button`
  display: flex;
  gap: 12px;
  width: 100%;
  padding: 15px;
  font-size: 0.9375rem;
  background-color: #fff;

  text-align: left;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default MoreTemplate;
