export function filterLocation(
  location: 'Y' | 'N' | '',
  address: string,
): string {
  if (location === 'N') {
    return '지원하지 않는 위치입니다. 아파트나 공동주택을 입력해주세요 😥';
  } else if (location === 'Y' || address) {
    return address;
  } else if (!address) {
    return '현재 위치를 입력해서 채팅방을 확인해보세요 ✨';
  }
}
