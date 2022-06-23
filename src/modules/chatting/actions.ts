import { AxiosError } from "axios";
import { createAction, createAsyncAction } from "typesafe-actions";
import {
  ChattingListRequest,
  ChattingListResponse,
  ChattingRoomInfoRequest,
  ChattingRoomInfoResponse,
  CurrentChatUserListResponse,
} from "./types";

const namespace = "chatting/";

//? 채팅방 정보 불러오기 actions
export const GET_CURRENT_CHATROOM_INFO_REQUEST =
  namespace + "GET_CURRENT_CHATROOM_INFO_REQUEST";

export const GET_CURRENT_CHATROOM_INFO_SUCCESS =
  namespace + "GET_CURRENT_CHATROOM_INFO_SUCCESS";

export const GET_CURRENT_CHATROOM_INFO_FAILURE =
  namespace + "GET_CURRENT_CHATROOM_INFO_FAILURE";

//? 채팅 관련 actions
export const GET_CHATTING_LIST_REQUEST =
  namespace + "GET_PREVIOUS_CHATTING_LIST_REQUEST";

export const GET_CHATTING_LIST_SUCCESS =
  namespace + "GET_PREVIOUS_CHATTING_LIST_SUCCESS";

export const GET_CHATTING_LIST_FAILURE =
  namespace + "GET_CHATTING_LIST_FAILURE";

export const SET_CURRENT_CHATTING_LIST =
  namespace + "SET_CURRENT_CHATTING_LIST";

export const GET_CURRENT_CHAT_USER_LIST_REQUEST =
  namespace + "GET_CURRENT_CHAT_USER_LIST_REQUEST";

export const GET_CURRENT_CHAT_USER_LIST_SUCCESS =
  namespace + "GET_CURRENT_CHAT_USER_LIST_SUCCESS";

export const GET_CURRENT_CHAT_USER_LIST_FAILURE =
  namespace + "GET_CURRENT_CHAT_USER_LIST_FAILURE";

export const GET_USER_NICKNAME_REQUEST =
  namespace + "GET_USER_NICKNAME_REQUEST";
export const GET_USER_NICKNAME_SUCCESS =
  namespace + "GET_USER_NICKNAME_SUCCESS";
export const GET_USER_NICKNAME_FAILURE =
  namespace + "GET_USER_NICKNAME_FAILURE";

export const CHANGE_CURRENT_COUNT_IN_CHATTING =
  namespace + "CHANGE_CURRENT_COUNT_IN_CHATTING";

export const SET_IMAGE_LIST_IN_CHATTING =
  namespace + "SET_IMAGE_LIST_IN_CHATTING";

export const SET_PARTICIPATING_USERS = namespace + "SET_PARTICIPATING_USERS";

export const SET_BAN_USER = namespace + "SET_BAN_USER";

// action creators
export const getCurrentChatRoomAsyncActions = createAsyncAction(
  GET_CURRENT_CHATROOM_INFO_REQUEST,
  GET_CURRENT_CHATROOM_INFO_SUCCESS,
  GET_CURRENT_CHATROOM_INFO_FAILURE
)<ChattingRoomInfoRequest, ChattingRoomInfoResponse, AxiosError>();

export const getChattingListActions = createAsyncAction(
  GET_CHATTING_LIST_REQUEST,
  GET_CHATTING_LIST_SUCCESS,
  GET_CHATTING_LIST_FAILURE
)<ChattingListRequest, ChattingListResponse, AxiosError>();

export const setCurrentChattingList = createAction(
  SET_CURRENT_CHATTING_LIST,
  (data) => data
)();

export const getCurrentChatUserListActions = createAsyncAction(
  GET_CURRENT_CHAT_USER_LIST_REQUEST,
  GET_CURRENT_CHAT_USER_LIST_SUCCESS,
  GET_CURRENT_CHAT_USER_LIST_FAILURE
)<ChattingRoomInfoRequest, CurrentChatUserListResponse, AxiosError>();

export const getUserNicknameActions = createAsyncAction(
  GET_USER_NICKNAME_REQUEST,
  GET_USER_NICKNAME_SUCCESS,
  GET_USER_NICKNAME_FAILURE
)<string, string, AxiosError>();

export const changeCurrentCountInChatting = createAction(
  CHANGE_CURRENT_COUNT_IN_CHATTING,
  (currentCount) => ({ currentCount })
)();

export const setImageListInChatting = createAction(
  SET_IMAGE_LIST_IN_CHATTING,
  (image) => ({ image })
)();

export const setParticipatingUsers = createAction(
  SET_PARTICIPATING_USERS,
  (data) => data
)();

export const setBanUser = createAction(SET_BAN_USER, (data) => data)();
