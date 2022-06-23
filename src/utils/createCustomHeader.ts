export function createCustomHeader(accessToken: string) {
  return {
    Authorization: `Bearer ${accessToken}`,
  };
}
