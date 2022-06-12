import { createReducer } from 'typesafe-actions';
import {
  ADD_TAG,
  INSERT_TITLE,
  INSERT_LINK,
  MINUS_MAX_COUNT,
  PLUS_MAX_COUNT,
  REMOVE_TAG,
  SELECT_ORDER_TIME_TYPE,
  SELECT_CATEGORY,
  CREATE_CHAT_ROOM_SUCCESS,
  INSERT_PLACE,
  SAVE_USER_ID,
  SAVE_BUILDING_CODE,
  INITIALIZE_CREATE_CHATROOM_STATES,
  GET_PREV_CREATED_LIST_SUCCESS,
  COPY_PREV_CHATROOM_DATA_SUCCESS,
  SELECT_COPY_PREV_CHATROOM_DATA,
  selectCopyPrevChatRoomData,
} from './actions';
import {
  CreateStates,
  InsertLinkAction,
  InsertTitleAction,
  SelectOrderTimeTypeAction,
  SelectCategoryAction,
  AddTagAction,
  RemoveTagAction,
  InsertPlaceAction,
  SaveUserIdAction,
  SaveBuildingCodeAction,
} from './types';

const initialCreateStates: CreateStates = {
  createData: {
    buildingCode: '',
    category: null,
    link: 'http://',
    place: '',
    title: '',
    user_id: '',
    tag: [],
    maxCount: 1,
    orderTimeType: '',
  },
  createChatRoomResponse: {
    chatMain_id: null,
  },
  prevCreatedListResponse: {
    chatRooms: [],
  },
  copyPrevChatRoomResponse: null,
  selectedPrevChatRoomData: null,
};

export const createStates = createReducer<CreateStates>(initialCreateStates, {
  [SELECT_ORDER_TIME_TYPE]: (state, action: SelectOrderTimeTypeAction) => ({
    ...state,
    createData: {
      ...state.createData,
      orderTimeType: action.payload.orderTimeType,
    },
  }),
  [INSERT_TITLE]: (state, action: InsertTitleAction) => ({
    ...state,
    createData: {
      ...state.createData,
      title: action.payload.title,
    },
  }),
  [INSERT_LINK]: (state, action: InsertLinkAction) => ({
    ...state,
    createData: {
      ...state.createData,
      link: action.payload.link,
    },
  }),
  [SELECT_CATEGORY]: (state, action: SelectCategoryAction) => ({
    ...state,
    createData: {
      ...state.createData,
      category: action.payload.category,
    },
  }),
  [ADD_TAG]: (state, action: AddTagAction) => {
    if (state.createData.tag.length >= 5) return state;
    else {
      return {
        ...state,
        createData: {
          ...state.createData,
          tag: [...state.createData.tag, action.payload.keyword],
        },
      };
    }
  },
  [REMOVE_TAG]: (state, action: RemoveTagAction) => ({
    ...state,
    createData: {
      ...state.createData,
      tag: state.createData.tag.filter(
        (_, index) => index !== action.payload.index,
      ),
    },
  }),
  [PLUS_MAX_COUNT]: (state, _) => {
    if (state.createData.maxCount >= 5) {
      return state;
    } else {
      return {
        ...state,
        createData: {
          ...state.createData,
          maxCount: state.createData.maxCount + 1,
        },
      };
    }
  },
  [MINUS_MAX_COUNT]: (state, _) => {
    if (state.createData.maxCount <= 1) {
      return state;
    } else {
      return {
        ...state,
        createData: {
          ...state.createData,
          maxCount: state.createData.maxCount - 1,
        },
      };
    }
  },
  [INSERT_PLACE]: (state, action: InsertPlaceAction) => ({
    ...state,
    createData: {
      ...state.createData,
      place: action.payload.place,
    },
  }),
  [SAVE_USER_ID]: (state, action: SaveUserIdAction) => ({
    ...state,
    createData: {
      ...state.createData,
      user_id: action.payload.user_id,
    },
  }),
  [SAVE_BUILDING_CODE]: (state, action: SaveBuildingCodeAction) => ({
    ...state,
    createData: {
      ...state.createData,
      buildingCode: action.payload.buildingCode,
    },
  }),
  [CREATE_CHAT_ROOM_SUCCESS]: (state, action) => ({
    ...state,
    createChatRoomResponse: {
      ...state.createChatRoomResponse,
      chatMain_id: action.payload.chatMain_id,
    },
  }),
  [INITIALIZE_CREATE_CHATROOM_STATES]: (state, action) => ({
    ...state,
    createData: initialCreateStates.createData,
  }),

  [GET_PREV_CREATED_LIST_SUCCESS]: (state, action) => ({
    ...state,
    prevCreatedListResponse: {
      ...state.prevCreatedListResponse,
      chatRooms: action.payload.chatRooms,
    },
  }),

  [COPY_PREV_CHATROOM_DATA_SUCCESS]: (state, action) => ({
    ...state,
    copyPrevChatRoomResponse: action.payload,
  }),

  [SELECT_COPY_PREV_CHATROOM_DATA]: (
    state,
    action: ReturnType<typeof selectCopyPrevChatRoomData>,
  ) => ({
    ...state,
    selectedPrevChatRoomData: action.payload.data,
  }),
});
