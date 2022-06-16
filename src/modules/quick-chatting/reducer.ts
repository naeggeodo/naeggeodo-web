import {
  GET_QUICK_MESSAGE_LIST_SUCCESS,
  PATCH_QUICK_CHAT_LIST_SUCCESS,
} from './actions';

import { createReducer } from 'typesafe-actions';
import { QuickChattingListResponse } from './types';

type QuickChatStates = {
  quickChatResponse: QuickChattingListResponse;
};

const initialQuickChatStates: QuickChatStates = {
  quickChatResponse: {
    quickChat: [],
    user_id: '',
  },
};

export const quickChatStates = createReducer<QuickChatStates>(
  initialQuickChatStates,
  {
    [GET_QUICK_MESSAGE_LIST_SUCCESS]: (state, action) => ({
      ...state,
      quickChatResponse: {
        ...state.quickChatResponse,
        quickChat: action.payload.quickChat,
      },
    }),
    [PATCH_QUICK_CHAT_LIST_SUCCESS]: (state, action) => ({
      ...state,
      quickChatResponse: {
        ...state.quickChatResponse,
        quickChat: action.payload.quickChat,
      },
    }),
  },
);
