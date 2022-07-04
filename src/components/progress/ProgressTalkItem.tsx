import Image from 'next/image';
import styled from 'styled-components';
import { useProgress } from '../../hooks/progress/useProgress';
import { useCustomRouter } from '../../hooks/utils/useCustomRouter';

import palette from '../../styles/palette';

interface Props {
  id: string;
  imgPath: string;
  index: number;
  latestMessage: string;
  title: string;
  user_id: string;
  address: string;
}

const ProgressTalkItem = ({
  id,
  imgPath,
  index,
  title,
  latestMessage,
  user_id,
  address,
}: Props) => {
  const {
    handleModifyButtonClick,
    onChangeTitle,
    onSaveTitle,
    myId,
    chatTitle,
    inputRefs,
    elementId,
  } = useProgress(title, id);

  const { shiftPage } = useCustomRouter(`/chatting/${id}`);

  return (
    <Container
      data-value={id}
      key={String(id)}
      onClick={elementId !== id ? shiftPage : null}>
      <ImageContainer>
        <Image
          style={{ borderRadius: '10px' }}
          src={imgPath}
          height={60}
          width={60}
          alt="채팅방 이미지"
        />
      </ImageContainer>

      <TextContainer>
        <TimeTitleWrapper className="target">
          <form onSubmit={onSaveTitle}>
            <input
              onChange={onChangeTitle}
              type="text"
              name="title"
              value={chatTitle}
              disabled
              ref={(el) => (inputRefs.current[index] = el)}
              id={String(id)}
            />
          </form>
          <ModifyButton onClick={handleModifyButtonClick} data-id={String(id)}>
            {user_id === myId && elementId !== id ? (
              <Image
                src="/assets/images/pencilicon.svg"
                width={26}
                height={26}
                alt="제목수정 아이콘"
              />
            ) : null}
          </ModifyButton>
          {elementId === id && (
            <ConfirmButton onClick={onSaveTitle}>
              <Image
                src="/assets/images/check.svg"
                width={26}
                height={26}
                alt="체크 아이콘"
              />
            </ConfirmButton>
          )}
        </TimeTitleWrapper>
        <Contents>
          <p>{latestMessage}</p>
        </Contents>
        <Address>{address}</Address>
      </TextContainer>
    </Container>
  );
};

const Container = styled.li`
  all: unset;
  display: flex;

  gap: 10px;

  padding: 24px;

  cursor: pointer;

  &:hover {
    background-color: ${palette.bgGray};
  }
`;

const ImageContainer = styled.div`
  min-width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 5px;

  border: 1px solid ${palette.LineGray};
  border-radius: 10px;

  cursor: pointer;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;
`;

const TimeTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  // ** 채팅방 제목 **
  form {
    width: 100%;
  }

  form > input:first-child {
    width: 100%;

    font-family: 'SpoqaBold';
    font-size: 0.9375rem;
    background-color: ${palette.lightOrange};
    color: #fff;
    border-radius: 5px;
    padding: 5px;
    outline: none;
    border: none;
    cursor: pointer;

    &:disabled {
      color: ${palette.black};
      background-color: transparent;
    }
  }

  // ** 시간 **
  & > p:nth-of-type(2) {
    font-weight: 500;
    font-size: 0.75rem;
    color: ${palette.TextGray};
    cursor: pointer;
  }
`;

const Contents = styled.div`
  display: flex;

  // ** 마지막 채팅 내용 **
  & > p {
    width: 75%;
    padding: 0 5px;
    font-size: 0.875rem;
    line-height: 150%;
    cursor: pointer;

    color: ${palette.DarkGray};

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const Address = styled.div`
  padding: 0 5px;
  margin-top: 10px;
  color: #222258;
  font-size: 0.875rem;
`;

const ModifyButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  all: unset;
  cursor: pointer;
`;

export default ProgressTalkItem;
