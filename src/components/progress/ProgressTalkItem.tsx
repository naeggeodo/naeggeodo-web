import Image from 'next/image';
import React, {
  FormEvent,
  FormEventHandler,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { useSelectLoginStates } from '../../hooks/select/useSelectLoginStates';
import palette from '../../styles/palette';

interface Props {
  id: string;
  imgPath: string;
  index: number;
  lastestMessage: string;
  title: string;
  user_id: string;
}

const ProgressTalkItem = ({
  id,
  imgPath,
  index,
  title,
  lastestMessage,
  user_id,
}: Props) => {
  const [elementId, setElementId] = useState<string>(null);
  const inputRefs = useRef([]);

  const myId = useSelectLoginStates().user_id;

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
    inputRefs.current.map((input, _) => {
      if (input.id === elementId) {
        input.disabled = false;
        input.focus();
      } else {
        input.disabled = true;
      }
    });
  }, [elementId]);

  const changeTitle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container data-value={id} key={String(id)}>
      <ImageContainer>
        <Image
          style={{ borderRadius: '10px' }}
          src={imgPath ? imgPath : '/assets/images/hamburger.svg'}
          height={60}
          width={60}
        />
      </ImageContainer>

      <TextContainer>
        <TimeTitleWrapper className='target'>
          <form onSubmit={changeTitle}>
            <input
              onChange={() => {}}
              type='text'
              value={title}
              disabled
              ref={(el) => (inputRefs.current[index] = el)}
              id={String(id)}
            />
          </form>
          <ModifyButton onClick={handleModifyButtonClick} id={String(id)}>
            {user_id === myId ? (
              <Image
                src='/assets/images/pencilicon.svg'
                width={23}
                height={23}></Image>
            ) : null}
          </ModifyButton>
        </TimeTitleWrapper>

        <Contents>
          <p>{lastestMessage}</p>
        </Contents>
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3px;

  border: 1px solid ${palette.LineGray};
  border-radius: 10px;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    color: #000000;
    background-color: #fdefe7;
    padding: 10px 5px;
    border-radius: 5px;
    outline: none;
    border: none;

    &:disabled {
      background-color: transparent;
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
    padding: 0 5px;
    font-size: 0.875rem;
    line-height: 150%;

    color: ${palette.DarkGray};
  }
`;

const ModifyButton = styled.button`
  all: unset;
`;

export default ProgressTalkItem;
