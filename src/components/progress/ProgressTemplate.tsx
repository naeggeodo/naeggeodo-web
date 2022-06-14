import Image from 'next/image';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import palette from '../../styles/palette';
import TabMenu from '../main/TabMenu';

const ProgressTemplate = () => {
  const { chatRoom } = useSelector(
    (state: RootState) => state.progressStates.progressChatRoomList,
  );
  const [elementId, setElementId] = useState<string>(null);
  const inputRefs = useRef([]);

  const handleModifyButtonClick = useCallback<
    (e: React.MouseEvent<HTMLButtonElement>) => void
  >(
    (e) => {
      e.stopPropagation();
      const id = e.currentTarget.getAttribute('id');
      setElementId(id);
    },
    [elementId],
  );

  useLayoutEffect(() => {
    inputRefs.current.map((v) =>
      v.id === elementId ? (v.disabled = false) : (v.disabled = true),
    );
  }, [elementId]);

  return (
    <React.Fragment>
      <Container>
        <Title>내꺼톡 리스트</Title>

        <ProgressTalkList>
          {chatRoom.length > 0 &&
            chatRoom.map((data, index) => {
              return (
                <ProgressTalkItem data-value={data.id} key={String(data.id)}>
                  <ImageContainer>
                    <Image
                      style={{ borderRadius: '10px' }}
                      src={
                        data.imgPath
                          ? data.imgPath
                          : '/assets/images/hamburger.svg'
                      }
                      height={50}
                      width={50}
                    />
                  </ImageContainer>

                  <TextContainer>
                    <TimeTitleWrapper>
                      <form>
                        <input
                          onChange={() => {}}
                          type='text'
                          value={data.title}
                          disabled
                          ref={(el) => (inputRefs.current[index] = el)}
                          id={String(data.id)}
                        />
                      </form>
                      <ModifyButton
                        onClick={handleModifyButtonClick}
                        id={String(data.id)}>
                        <Image
                          src='/assets/images/pencilicon.svg'
                          width={18}
                          height={18}></Image>
                      </ModifyButton>
                    </TimeTitleWrapper>

                    <Contents>
                      <p>105동 정문에서 수령하시면 됩니다.</p>
                    </Contents>
                  </TextContainer>
                </ProgressTalkItem>
              );
            })}
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
  all: unset;
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
  align-items: center;
  gap: 10px;

  // ** 채팅방 제목 **

  form {
    width: 100%;
  }

  form > input:first-child {
    width: 100%;

    font-family: 'SpoqaBold';
    font-size: 0.9375rem;
    padding: 5px;
    color: #000000;
    background-color: green;
    border-radius: 5px;
    border: 1px solid ${palette.bgGray};
    outline: none;

    &:disabled {
      background-color: red;
    }
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

  // ** 마지막 채팅 내용 **
  & > p {
    font-size: 0.875rem;
    line-height: 150%;

    color: ${palette.DarkGray};
  }
`;

const ModifyButton = styled.button`
  all: unset;
`;

export default ProgressTemplate;
