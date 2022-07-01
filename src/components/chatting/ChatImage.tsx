import Image from "next/image";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../modules";
import { ChattingListItem } from "../../modules/chatting/types";
import palette from "../../styles/palette";
import DateFormatter from "../../utils/DateFormatter";

const ChatImage = ({
  message,
  date,
}: {
  message: ChattingListItem;
  date?: string;
}) => {
  const chatDate = useMemo(() => new DateFormatter(date), [date]);
  const master_id = useSelector(
    (state: RootState) => state.chattingRoomState.chatRoomInfo.user_id
  );
  const currentDate = new Date();
  const today = useMemo(
    () =>
      `${currentDate.getFullYear()}-${String(
        currentDate.getMonth() + 1
      ).padStart(2, "0")}-${currentDate.getDate()}`,
    [currentDate]
  );

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
            <StyledImg
              src={message.contents}
              alt="채팅 이미지"
              width={250}
              height={500}
            />
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

const StyledImg = styled(Image)`
  border-radius: 10px;
  border: 1px solid red;
  overflow: hidden;
`;

const Time = styled.p`
  color: ${palette.DarkGray};
  font-size: 0.75rem;
`;
export default ChatImage;
