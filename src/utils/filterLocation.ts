export function filterLocation(
  location: 'Y' | 'N' | '',
  address: string,
): string {
  if (!address) {
    return '현재 위치를 입력해서 채팅방을 확인해 보세요 ✨';
  } else if (location === 'N') {
    return '지원하지 않는 위치입니다. 아파트나 공동주택을 선택해 주세요 😥';
  } else if (location === 'Y' || address) {
    return address;
  }
}

export function filterLocationInSearchPage(
  address: string,
  accessToken: string,
) {
  if (address) return `현재 위치는 ${address} 입니다.`;
  else if (!accessToken && !address) {
    return '로그인 후 이용가능합니다.';
  } else if (accessToken && !address) {
    return '홈 탭에서 현재 위치를 설정해보세요.';
  }
}
