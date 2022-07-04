import React, {
  ChangeEvent,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import TagButton from './TagButton';
import FieldTitle from './FieldTitle';
import TitleText from './TitleText';
import { useCreateNaeggeotalk } from '../../../hooks/useCreateNaeggeotalk';
import CreateButton from '../CreateButton';
import SelectCategoryDrawer from './SelectCategoryDrawer';
import palette from '../../../styles/palette';
import { convertEngCategoryToKor } from '../../../utils/converEngCategoryToKor';
import { useSelectLoginStates } from '../../../hooks/select/useSelectLoginStates';

// ? 방 생성시 상세 정보 선택하는 페이지
// ? url : create

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
    place,
    tagText,
    maxCount,
    orderTimeType,
    changeTagText,
    dispatchAddTag,
    dispatchRemoveTag,
    dispatchInputAction,
    dispatchMinusMaxCount,
    dispatchPlusMaxCount,
    dispatchCreateChatRoom,
  } = useCreateNaeggeotalk();
  const { user_id, address, buildingCode } = useSelectLoginStates();

  const urlRegex = /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi;
  const linkRef = useRef(null);
  const [isUrl, setIsUrl] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string | ArrayBuffer>();
  const [imgFile, setImgFile] = useState<File>();

  const openCategoryList = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const uploadImg = useCallback<
    (e: ChangeEvent<HTMLInputElement>) => Promise<void>
  >(
    (e) => {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      return new Promise<void>((resolve) => {
        reader.onload = () => {
          setImgFile(e.target.files[0]);
          setImgSrc(reader.result);
          resolve();
        };
      });
    },
    [imgSrc, imgFile],
  );

  useLayoutEffect(() => {
    if (isUrl) {
      linkRef.current.style = `display: flex; visibility: visible; opacity: 1;`;
    } else if (!isUrl || link.length === 0) {
      linkRef.current.style = ` visibility: hidden; opacity: 0;`;
    }
  }, [isUrl, link]);

  const createChatRoom = useCallback(async () => {
    const sendData = {
      address,
      buildingCode,
      category,
      link,
      place,
      title,
      user_id,
      tag,
      maxCount,
      orderTimeType,
    };

    const json = JSON.stringify(sendData);
    const formData = new FormData();

    const blob = new Blob([json], {
      type: 'application/json',
    });

    formData.append('chat', blob);
    formData.append('file', imgFile);

    dispatchCreateChatRoom(formData);
  }, [
    buildingCode,
    category,
    link,
    place,
    title,
    user_id,
    tag,
    maxCount,
    orderTimeType,
    imgFile,
    imgSrc,
    address,
  ]);

  return (
    <Wrapper>
      <div>
        <Content>
          <Item>
            <FieldTitle title="채팅방 제목" />
            <Input
              maxLength={40}
              type="text"
              onChange={(e) => dispatchInputAction(e, 'title')}
              value={title}
              placeholder="채팅방 제목을 입력해주세요."
            />
          </Item>
          <SelectCategory onClick={openCategoryList}>
            <FieldTitle
              title={convertEngCategoryToKor(category) || '카테고리 선택'}
            />
            <Image
              src="/assets/images/arrowrightdarkgray.svg"
              width={17}
              height={16}></Image>
          </SelectCategory>

          <ChatRoomContainer>
            <TitleWrapper>
              <FieldTitle title="입장 인원" />
              <Desc>(최소 2명 ~ 최대 5명)</Desc>
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
            <TitleText>수령장소</TitleText>
            <Input
              maxLength={40}
              type="text"
              onChange={(e) => dispatchInputAction(e, 'place')}
              value={place}
              placeholder="수령장소를 입력해주세요 (ex.105동 1층 경비실)"
            />
          </Item>
          <Item>
            <TitleSubTitleWrapper>
              <TitleText>배달앱 링크</TitleText>
              <p>
                (배달앱 링크를 넣으면 채팅방 유저들이 정보를 쉽게 볼 수
                있습니다)
              </p>
            </TitleSubTitleWrapper>
            <InputWrapper>
              <Input
                maxLength={40}
                type="url"
                placeholder="https://"
                value={link}
                onChange={(e) => {
                  setIsUrl(urlRegex.test(link));
                  dispatchInputAction(e, 'link');
                }}
              />
              <IsUrlCheck ref={linkRef} isUrl={isUrl}>
                <Image src="/assets/images/check.svg" width={30} height={30} />
              </IsUrlCheck>
            </InputWrapper>
          </Item>
          <Item>
            <TagTitle>
              <TitleText>태그</TitleText>
              <SmallText>ex. 음식명, 카테고리명</SmallText>
            </TagTitle>
            <form onSubmit={(e) => dispatchAddTag(e)}>
              <Input
                maxLength={15}
                value={tagText}
                onChange={changeTagText}
                placeholder="태그 작성 후 엔터키를 입력하세요 (최대 5개, 글자수 제한 15자)"
              />
            </form>
            <TagContainer>
              {tag.map((item, i) => (
                <TagButton
                  key={item + i}
                  dataValue={i}
                  handleClick={dispatchRemoveTag}
                  item={item}
                />
              ))}
            </TagContainer>
          </Item>

          <Item>
            <TitleSubTitleWrapper>
              <TitleText>채팅방 이미지</TitleText>
              <p>
                (이미지를 삽입하지 않으면 카테고리에 따른 기본이미지가
                보여집니다 😎)
              </p>
            </TitleSubTitleWrapper>
            <FileBox>
              <ImgBox>
                {imgSrc && (
                  <Image src={imgSrc as string} width={70} height={70} />
                )}
              </ImgBox>
              <SearchFileButton htmlFor="file">파일 찾기</SearchFileButton>
              <InputFile
                onChange={uploadImg}
                accept=".jpg, .jpeg, .png, .svg"
                type="file"
                id="file"
              />
            </FileBox>
          </Item>
        </Content>
      </div>
      <SelectCategoryDrawer isOpen={isOpen} setIsOpen={setIsOpen} />

      <ButtonWrapper>
        <CreateButton
          handleClick={createChatRoom}
          storeName={title}
          maxCount={maxCount}
          category={category}
        />
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 90%;

  margin: 0 auto;
  background-color: #fff;
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

const TitleSubTitleWrapper = styled(TitleWrapper)`
  gap: 10px;

  & > p:nth-of-type(2) {
    font-size: 0.75rem;
    color: ${palette.DarkGray};
    line-height: 1.4;
    word-break: keep-all;
  }
`;

const Input = styled.input`
  line-height: 16px;
  font-size: 0.9375rem;
  color: ${palette.DarkGray};
  width: 80%;
  outline: none;
  border: none;

  &::placeholder {
    color: #b8b8b8;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Desc = styled.p`
  font-weight: 500;
  font-size: 0.9375rem;
  color: ${palette.DarkGray};
  word-break: keep-all;
  line-height: 1.4;
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

const IsUrlCheck = styled.div<MoveLinkProps>`
  display: flex;
  justify-content: center;
  width: 63px;
  transition: 1s;
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
