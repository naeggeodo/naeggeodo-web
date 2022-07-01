import axios from 'axios';

export default class SearchService {
  static async asyncGetSearchTags() {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/chat-rooms/tag/most-wanted`,
      { withCredentials: true },
    );
  }

  static async asyncGetSearchResultByTag(tag: string) {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/chat-rooms/tag?keyWord=${encodeURI(
        tag,
      )}`,
      { withCredentials: true },
    );
  }

  static async asyncGetSearchResultByInput(keyWord: string) {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/chat-rooms/search?keyWord=${keyWord}`,
      { withCredentials: true },
    );
  }
}
