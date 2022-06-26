export interface MyPageUserInfoResponse {
  nickname: string;
  myOrdersCount: number | null;
  participatingChatCount: number | null;
}

export type ReportRequestBody = {
  user_id: string;
  contents: string;
  type: string;
};

export type ChangeNickNameResponse = {
  user_id: string;
  nickname: string;
};
