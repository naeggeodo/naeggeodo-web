import axios from 'axios';

export function useDeposit() {
  const onDepositHandler = async (chattingRoomId: string, userId: string) => {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/chat/rooms/${chattingRoomId}/users/${userId}`,
    );
    return response;
  };

  const convertToComplete = async (chattingRoomId: string) => {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/chat/rooms/${chattingRoomId}`,
      {},
      {
        params: {
          state: 'END',
        },
      },
    );
    const data = await response.data;
    return data;
  };

  return {
    onDepositHandler,
    convertToComplete,
  };
}
