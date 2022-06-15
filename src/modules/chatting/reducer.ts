import {
  GET_CURRENT_CHATROOM_INFO_SUCCESS,
  GET_CURRENT_CHAT_USER_LIST_SUCCESS,
  GET_CHATTING_LIST_SUCCESS,
  GET_QUICK_MESSAGE_LIST_SUCCESS,
  SET_CURRENT_CHATTING_LIST,
  GET_USER_NICKNAME_SUCCESS,
  CHANGE_CURRENT_COUNT_IN_CHATTING,
  SET_IMAGE_LIST_IN_CHATTING,
  setImageListInChatting,
  SET_PARTICIPATING_USERS,
} from './actions';
import {
  ChattingRoomInfoResponse,
  CurrentChatUserListResponse,
  ChattingListResponse,
  QuickChattingListResponse,
} from './types';
import { action, createReducer } from 'typesafe-actions';

type ChattingRoomState = {
  chatRoomInfo: ChattingRoomInfoResponse | null;
  chattingList: ChattingListResponse;
  quickChatList: QuickChattingListResponse;
  currentChatUserList: CurrentChatUserListResponse | null;
  nickname: string | null;
  imageList: string[];
};

const initialChattingRoomState: ChattingRoomState = {
  chatRoomInfo: {
    address: '',
    endDate: null,
    buildingCode: '',
    link: '',
    orderTimeType: '',
    title: '',
    maxCount: 0,
    tags: [],
    bookmarks: null,
    user_id: '',
    imgPath: '',
    currentCount: 0,
    bookmarksDate: '',
    id: 0,
    state: null,
    place: '',
    category: null,
    createDate: '',
  },
  chattingList: { messages: [] },
  quickChatList: {
    quickChat: [],
    user_id: '',
  },
  currentChatUserList: { users: [] },
  nickname: null,
  imageList: [],
};

export const chattingRoomState = createReducer<ChattingRoomState>(
  initialChattingRoomState,
  {
    [GET_CURRENT_CHATROOM_INFO_SUCCESS]: (state, action) => ({
      ...state,
      chatRoomInfo: {
        ...state.chatRoomInfo,
        address: action.payload.address,
        endDate: action.payload.endDate,
        buildingCode: action.payload.buildingCode,
        link: action.payload.link,
        orderTimeType: action.payload.orderTimeType,
        title: action.payload.title,
        maxCount: action.payload.maxCount,
        tag: action.payload.tags,
        bookmarks: action.payload.bookmarks,
        user_id: action.payload.user_id,
        imgPath: action.payload.imgPath,
        currentCount: action.payload.currentCount,
        bookmarkDate: action.payload.bookmarksDate,
        id: action.payload.id,
        state: action.payload.state,
        place: action.payload.place,
        category: action.payload.category,
        createDate: action.payload.createDate,
      },
    }),
    [GET_CHATTING_LIST_SUCCESS]: (state, action) => ({
      ...state,
      chattingList: action.payload,
    }),
    [GET_QUICK_MESSAGE_LIST_SUCCESS]: (state, action) => ({
      ...state,
      quickChatList: action.payload,
    }),
    [GET_CURRENT_CHAT_USER_LIST_SUCCESS]: (state, action) => ({
      ...state,
      currentChatUserList: action.payload,
    }),
    [SET_CURRENT_CHATTING_LIST]: (state, action) => ({
      ...state,
      chattingList: {
        ...state.chattingList,
        messages: [...state.chattingList.messages, action.payload],
      },
    }),
    [GET_USER_NICKNAME_SUCCESS]: (state, action) => ({
      ...state,
      nickname: action.payload,
    }),
    [CHANGE_CURRENT_COUNT_IN_CHATTING]: (state, action) => ({
      ...state,
      chatRoomInfo: {
        ...state.chatRoomInfo,
        currentCount: action.payload.currentCount,
      },
    }),
    [SET_IMAGE_LIST_IN_CHATTING]: (
      state,
      action: ReturnType<typeof setImageListInChatting>,
    ) => ({
      ...state,
      imageList: [...state.imageList, action.payload.image],
    }),
    [SET_PARTICIPATING_USERS]: (state, action) => ({
      ...state,
      currentChatUserList: {
        ...state.currentChatUserList,
        users: action.payload,
      },
    }),
  },
);
