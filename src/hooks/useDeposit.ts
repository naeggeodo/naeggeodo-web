import axios from 'axios';

export function useDeposit() {
  const onDepositHandler = async (chattingRoomId: string, userId: string) => {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/chat/rooms/${chattingRoomId}/users/${userId}`,
    );
    return response;
  };
  return {
    onDepositHandler,
  };
}
