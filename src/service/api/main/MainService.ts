import axios from 'axios';
import { CsrApiService } from '..';
import { Category } from '../../../modules/common/types';

export default class MainService {
  static async asyncGetCategories() {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  }

  static async asyncGetAllChatRooms(buildingCode: string) {
    return axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/chat-rooms?buildingCode=${buildingCode}`,
    );
  }

  static async asyncGetChatRoomsWithCategory(
    buildingCode: string,
    category: Category,
  ) {
    return axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}${encodeURI(
        `/chat-rooms?category=${category}&buildingCode=${buildingCode}`,
      )}`,
    );
  }

  // ? 좋아요 카운팅
  static async asyncGetLikesCount() {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/like`);
  }

  // ? 좋아요 증가
  static async asyncPostLikesCount() {
    try {
      return CsrApiService.postApi('/like', {});
    } catch (error) {
      console.log(error);
    }
  }
}
