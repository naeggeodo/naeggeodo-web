// ** 메인 페이지 하단 스크롤에서 쓰는 데이터들 타입 **
export type TabItem = {
  id?: number;
  title: '홈' | '검색' | '내꺼톡 생성' | '내꺼톡' | '전체';
  altText:
    | '홈버튼'
    | '검색버튼'
    | '추가하기 버튼'
    | '채팅방 버튼'
    | '더보기 버튼';
  image: string;
  link: string;
};

// ** 채팅 방 리스트 개별 아이템에 사용되는 타입 & 스토리북에서도 사용 **
export type ChatRoomItemProps = {
  title: string;
  maxCount: number;
  currentCount: number;
  createDate: string;
  link: string;
};
