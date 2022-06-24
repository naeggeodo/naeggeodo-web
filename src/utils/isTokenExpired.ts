import jwtDecode from 'jwt-decode';

type Decoded = {
  exp: number;
  iss: string;
  sub: string;
};

export function isTokenExpired(accessToken: string) {
  if (!accessToken) return;
  const decoded: Decoded = jwtDecode(accessToken);
  const exp = decoded.exp;
  console.log(decoded, '디코디드');

  const todayDate = new Date();
  const expiredDate = new Date(0);

  expiredDate.setUTCSeconds(exp);
  console.log(expiredDate, 'expired');
  console.log(todayDate, 'today');
  console.log(expiredDate <= todayDate);

  return expiredDate <= todayDate;
}
