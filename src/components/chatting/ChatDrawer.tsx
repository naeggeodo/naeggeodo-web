import Image from 'next/image';
import styled from 'styled-components';

type StyledType = {
  first?: boolean;
  isMe?: boolean;
  drawerOpen?: boolean;
};

type PropsType = {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  drawerOpen: boolean;
};

const ChatDrawer = ({ setDrawerOpen, drawerOpen }: PropsType) => {
  return (
    <Container drawerOpen={drawerOpen}>
      <Content>
        <Title>내꺼톡 서랍</Title>
        <div>
          <SubTitle>
            <Image
              src='/assets/images/picture.svg'
              width={15}
              height={15}
              alt='사진 아이콘'
            />
            사진
            <NextButton>
              <Image
                src='/assets/images/nextbtn.svg'
                width={15}
                height={15}
                alt='다음 버튼'
              />
            </NextButton>
          </SubTitle>
          <ImageList>
            <StyledImage
              src='/assets/images/pizzabg.svg'
              width={55}
              height={55}
              alt='이미지'
              objectFit='contain'
              first={true}
            />
            <StyledImage
              src='/assets/images/pizzabg.svg'
              width={55}
              height={55}
              alt='이미지'
              objectFit='contain'
            />
            <StyledImage
              src='/assets/images/pizzabg.svg'
              width={55}
              height={55}
              alt='이미지'
              objectFit='contain'
            />
            <StyledImage
              src='/assets/images/pizzabg.svg'
              width={55}
              height={55}
              alt='이미지'
              objectFit='contain'
            />
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
            참여자(4)
          </SubTitle>
          <div>
            <MemberItem>
              <Image
                src='/assets/images/profile.svg'
                width={40}
                height={40}
                alt='프로필'
                objectFit='contain'
              />
              <Nickname isMe={true}>신길동 호랑이</Nickname>
            </MemberItem>
          </div>
        </div>
      </Content>
      <Footer>
        <Button
          onClick={() => {
            setDrawerOpen(false);
          }}>
          <Image
            src='/assets/images/drawerclosebtn.svg'
            width={20}
            height={24}
            alt='서랍 닫기'
          />
        </Button>
        <Button>
          <Image
            src='/assets/images/settingblack.svg'
            width={18}
            height={24}
            alt='서랍 설정'
          />
        </Button>
      </Footer>
    </Container>
  );
};

const Container = styled.div<StyledType>`
  width: ${(props) => (props.drawerOpen ? '70%' : '0')};
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;

  overflow: hidden;
  ${(props) =>
    props.drawerOpen && 'box-shadow: 0 0 1000px 1000px rgba(0, 0, 0, 0.7);'}
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

const NextButton = styled.button`
  position: absolute;
  right: 20px;

  outline: none;
  border: none;
  background: #fff;
  cursor: pointer;
`;

const ImageList = styled.div`
  height: 55px;

  display: flex;
  gap: 2px;

  overflow-y: hidden;
`;

const StyledImage = styled(Image)<StyledType>`
  ${(props) => props.first && 'border-radius: 5px 0px 0px 5px'};
`;

const MemberItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Nickname = styled.p<StyledType>`
  font-size: 0.9375rem;
  ${(props) =>
    props.isMe &&
    `
  &:before{
      content: '나';

      background: #191919;
      color: #fff;

      border-radius: 5px;
      font-size: 0.625rem;
      padding: 4px;
      margin-right: 4px;
  }`}
`;

const Footer = styled.div`
  width: 100%;
  height: 10%;

  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: space-between;

  padding: 20px;
  border-top: 1px solid #e0e0e0;
  background: #fff;
`;

const Button = styled.button`
  outline: none;
  border: none;
  background: #fff;
  cursor: pointer;
`;

export default ChatDrawer;