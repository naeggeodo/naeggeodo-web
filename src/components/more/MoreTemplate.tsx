import Image from 'next/image';
import styled from 'styled-components';
import palette from '../../styles/palette';
import TabMenu from '../main/TabMenu';

type StyledType = {
  active?: boolean;
};

const MoreTemplate = () => {
  return (
    <>
      <Wrap>
        <Section>
          <Title>안녕하세요,</Title>
          <Title>
            <Name>조재연</Name>
            <span>님</span>
          </Title>
          <InfoBox>
            <InfoDiv>
              <P>최근 3개월간 주문</P>
              <P active={true}>4건</P>
            </InfoDiv>
            <InfoDiv>
              <P>참여중인 내꺼도</P>
              <P active={true}>3건</P>
            </InfoDiv>
          </InfoBox>
          <Bar />
        </Section>
        <Section>
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
        </Section>
        <Section>
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
        </Section>
      </Wrap>
      <TabMenu />
    </>
  );
};

const Wrap = styled.div`
  width: 90%;
  padding-bottom: 40px;

  margin: 0 auto;
  margin-top: 20px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.p`
  font-size: 1.5rem;
  line-height: 30px;
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
  font-size: ${(props) => (props.active ? '1.25rem' : '0.875rem')};
  ${(props) =>
    props.active &&
    `color: ${palette.mainOrange};     
    font-family: 'SpoqaBold';`};
`;

const Bar = styled.div`
  width: 100%;
  height: 8px;

  margin-top: 20px;
  background: #f5f5f5;
  opacity: 0.5;
`;

const SectionTitle = styled.h3`
  color: #c4c4c4;
  font-size: 0.9375rem;
`;

const MenuItem = styled.button`
  display: flex;
  gap: 12px;
  width: 100%;
  padding: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 0.9375rem;
  background: #fff;
  text-align: left;
`;

export default MoreTemplate;
