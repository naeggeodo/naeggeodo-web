import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export function useSelectChatRoomInfo() {
  const imgPath = useSelector(
    (state: RootState) => state.chattingRoomState.chatRoomInfo?.imgPath,
  );
  const link = useSelector(
    (state: RootState) => state.chattingRoomState.chatRoomInfo?.link,
  );
  const maxCount = useSelector(
    (state: RootState) => state.chattingRoomState.chatRoomInfo?.maxCount,
  );
  const currentCount = useSelector(
    (state: RootState) => state.chattingRoomState.chatRoomInfo?.currentCount,
  );

  const title = useSelector(
    (state: RootState) => state.chattingRoomState.chatRoomInfo?.title,
  );

  return { imgPath, link, maxCount, currentCount, title };
}
