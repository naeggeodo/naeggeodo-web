import Image from 'next/image';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import { ChattingListItem } from '../../modules/chatting/types';
import palette from '../../styles/palette';
import DateFormatter from '../../utils/DateFormatter';

const ChatItem = ({
  message,
  date,
}: {
  message: ChattingListItem;
  date?: string;
}) => {
  const chatDate = useMemo(() => new DateFormatter(date), [date]);
  const master_id = useSelector(
    (state: RootState) => state.chattingRoomState.chatRoomInfo.user_id,
  );
  const currentDate = new Date();
  const today = useMemo(
    () =>
      `${currentDate.getFullYear()}-${String(
        currentDate.getMonth() + 1,
      ).padStart(2, '0')}-${currentDate.getDate()}`,
    [currentDate],
  );

  console.log(master_id, 'mm');

  return (
    <Container>
      <FlexRow>
        {message.user_id === master_id ? (
          <Image
            src="/assets/images/host-logo.svg"
            width={45}
            height={45}
            alt="유저 프로필 사진"
          />
        ) : (
          <Image
            src="/assets/images/avatar.svg"
            width={45}
            height={45}
            alt="유저 프로필 사진"
          />
        )}
        <FlexColumn>
          <p>{message.nickname}</p>
          <TextRow>
            {message.contents?.includes('data:image/') ? (
              <Image
                src={message.contents}
                alt="채팅 이미지"
                width={250}
                height={350}
              />
            ) : (
              <Content>{message.contents}</Content>
            )}
            <Time>
              {today === chatDate.date ? null : (
                <span>{chatDate.formatDate()}</span>
              )}
              <span>{chatDate.formatTime()}</span>
            </Time>
          </TextRow>
        </FlexColumn>
      </FlexRow>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const FlexRow = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 5px;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`;

const TextRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

const Content = styled.div`
  max-width: 50%;
  padding: 6px 10px;

  font-size: 0.9375rem;
  line-height: 1.2em;

  color: ${palette.black};
  background-color: #fff;
  border-radius: 0 10px 10px 10px;
`;

const Time = styled.p`
  color: ${palette.DarkGray};
  font-size: 0.75rem;
`;

export default ChatItem;
