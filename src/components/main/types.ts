// ** 메인 페이지 하단 스크롤에서 쓰는 데이터들 타입 **
export type TabItem = {
  id?: number;
  title: '홈' | '검색' | '내꺼도 생성' | '내꺼도' | '전체';
  altText:
    | '홈버튼'
    | '검색버튼'
    | '추가하기 버튼'
    | '채팅방 버튼'
    | '더보기 버튼';
  image: string;
};
