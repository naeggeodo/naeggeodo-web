import React, { ChangeEvent, useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../styles/palette';

import CreateTabMenu from './CreateTabMenu';
import { useCreateNaeggeotalk } from '../../hooks/useCreateNaeggeotalk';
import Image from 'next/image';
import CreateButton from './CreateButton';
import Link from 'next/link';
import SelectCategoryDrawer from './SelectCategoryDrawer';
import { convertEngCategoryToKor } from '../../utils/converEngCategoryToKor';

interface MoveLinkProps {
  isUrl: boolean;
}

const CreateForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    title,
    link,
    category,
    tag,
    tagText,
    maxCount,
    changeTagText,
    dispatchAddTag,
    dispatchRemoveTag,
    dispatchInsertTitle,
    dispatchInsertLink,
    dispatchMinusMaxCount,
    dispatchPlusMaxCount,
  } = useCreateNaeggeotalk();

  const urlRegex = /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi;
  const [isUrl, setIsUrl] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string | ArrayBuffer>();
  const [imgFile, setImgFile] = useState<any>();

  const openCategoryList = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const uploadImg = useCallback<
    (e: ChangeEvent<HTMLInputElement>) => Promise<void>
  >(
    (e) => {
      setImgFile(e.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      return new Promise<void>((resolve) => {
        reader.onload = () => {
          setImgSrc(reader.result);
          resolve();
        };
      });
    },
    [imgSrc],
  );

  return (
    <Wrap>
      <CreateTabMenu />
      <Container>
        <div>
          <Content>
            <Item>
              <TitleWrapper>
                <Title>가게명</Title>
                <OrangeStar>*</OrangeStar>
              </TitleWrapper>
              <Input
                type='text'
                onChange={dispatchInsertTitle}
                value={title}
                placeholder='가게 이름을 입력해주세요.'
              />
            </Item>
            <SelectCategory onClick={openCategoryList}>
              <Title>
                {convertEngCategoryToKor(category) || '카테고리 선택'}
              </Title>
              <Image
                src='/assets/images/arrowrightdarkgray.svg'
                width={17}
                height={16}></Image>
            </SelectCategory>
            <Item>
              <Title>가게 링크</Title>
              <InputWrapper>
                <Input
                  type='text'
                  placeholder='가게 링크를 입력해주세요'
                  value={link}
                  onChange={(e) => {
                    setIsUrl(urlRegex.test(link));
                    dispatchInsertLink(e);
                  }}
                />
                <Link href={`${link}`} passHref>
                  <MoveLinkButton
                    target='_blank'
                    rel='noopener noreferrer'
                    isUrl={isUrl}>
                    링크이동
                  </MoveLinkButton>
                </Link>
              </InputWrapper>
            </Item>
            <Item>
              <TagTitle>
                <Title>태그</Title>
                <SmallText>ex. 음식명, 카테고리명</SmallText>
              </TagTitle>
              <form onSubmit={(e) => dispatchAddTag(e)}>
                <Input
                  value={tagText}
                  onChange={changeTagText}
                  placeholder='태그 작성 후 Enter를 입력하세요. (최대 5개)'
                />
              </form>
              <TagContainer>
                {tag.map((item, i) => (
                  <TagButton
                    key={item + i}
                    data-value={i}
                    onClick={dispatchRemoveTag}>
                    <span>{item}</span>
                    <Image
                      src='/assets/images/buttonclose.svg'
                      width={12}
                      height={12}
                      alt='닫기 버튼'
                    />
                  </TagButton>
                ))}
              </TagContainer>
            </Item>

            <ChatRoomContainer>
              <TitleWrapper>
                <Title>입장 인원</Title>
                <Desc>(최대5명)</Desc>
              </TitleWrapper>

              <CounterContainer>
                <PlusMinusButton
                  style={
                    maxCount <= 5 && maxCount > 1
                      ? { color: `${palette.black}` }
                      : { color: `${palette.TextGray}` }
                  }
                  onClick={dispatchMinusMaxCount}>
                  -
                </PlusMinusButton>
                <div>{maxCount}</div>
                <PlusMinusButton
                  style={
                    maxCount < 5 && maxCount >= 1
                      ? { color: `${palette.black}` }
                      : { color: `${palette.TextGray}` }
                  }
                  onClick={dispatchPlusMaxCount}>
                  +
                </PlusMinusButton>
              </CounterContainer>
            </ChatRoomContainer>

            <Item>
              <TagTitle>
                <Title>채팅방 이미지</Title>
              </TagTitle>
              <FileBox>
                <ImgBox>
                  <img src={imgSrc as string} />
                </ImgBox>
                <SearchFileButton htmlFor='file'>파일 찾기</SearchFileButton>
                <InputFile
                  onChange={uploadImg}
                  accept='image/*'
                  type='file'
                  id='file'
                />
              </FileBox>
            </Item>
          </Content>
        </div>
        <SelectCategoryDrawer isOpen={isOpen} setIsOpen={setIsOpen} />

        <ButtonWrapper>
          <CreateButton
            handleClick={() => console.log(imgFile)}
            storeName={title}
          />
        </ButtonWrapper>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;

  padding: 46px 0 83px;
  background-color: #fff;
`;

const Container = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 0 auto;
`;

const Content = styled.div`
  min-height: 70vh;

  margin-top: 19.5px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px 0;
  border-bottom: 1px solid ${palette.bgGray};
`;

const SelectCategory = styled.button`
  all: unset;

  display: flex;
  justify-content: space-between;
  padding: 20px 0;

  border-bottom: 1px solid ${palette.bgGray};

  width: 100%;

  cursor: pointer;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Title = styled.p`
  font-family: 'SpoqaBold';
`;

const OrangeStar = styled.span`
  font-weight: 500;
  font-size: 0.9375rem;

  color: ${palette.mainOrange};
`;

const Input = styled.input`
  line-height: 16px;
  font-size: 0.9375rem;
  color: ${palette.DarkGray};
  width: 80%;

  outline: none;
  border: none;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Desc = styled.p`
  font-weight: 500;
  font-size: 0.9375rem;

  color: ${palette.DarkGray};
`;

const TagTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const TagButton = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  gap: 4px;

  font-weight: 500;
  font-size: 0.75rem;

  display: flex;
  align-items: center;

  color: #191919;

  padding: 4px 10px;

  background-color: ${palette.LightGray2};
  border-radius: 5px;

  cursor: pointer;
`;

const SmallText = styled.p`
  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 0.75rem;
  color: ${palette.black};
`;

const ChatRoomContainer = styled(Item)`
  flex-direction: row;
  justify-content: space-between;

  border-bottom: 1px solid ${palette.bgGray};
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  font-weight: 500;
  font-size: 1.25rem;
  color: ${palette.black};
`;

const PlusMinusButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;

  color: ${palette.TextGray};

  background-color: ${palette.LightGray2};
  border-radius: 5px;

  cursor: pointer;
`;

const MoveLinkButton = styled.a<MoveLinkProps>`
  all: unset;
  display: flex;
  justify-content: center;

  visibility: hidden;
  opacity: 0;
  width: 63px;

  padding: 4px 0;

  font-weight: 500;
  font-size: 0.75rem;
  color: ${palette.mainOrange};

  background-color: ${palette.LightGray};
  border-radius: 5px;

  cursor: pointer;
  transition: 1s;

  ${(props) =>
    props.isUrl &&
    css`
      display: flex;
      visibility: visible;
      opacity: 1;
    `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

const FileBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ImgBox = styled.div`
  width: 70px;
  height: 70px;

  border-radius: 5px;
  border: 1px solid #dddddd;
`;

const InputFile = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

const SearchFileButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${palette.mainOrange};
  background-color: #fdefe7;

  padding: 10px 15px;
  border-radius: 5px;
  margin-left: 10px;

  cursor: pointer;
`;

export default CreateForm;
