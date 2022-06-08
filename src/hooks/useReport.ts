import { ReportRequestBody } from '../modules/mypage/types';
import { MypageService } from '../service/api/mypage/MypageService';

export function useReport() {
  const submitReport = async (body: ReportRequestBody, str: string) => {
    const response = await MypageService.asyncSubmitReport(body);
    const data = await response.data;
    alert(`${str}가 완료되었습니다.`);
    return data;
  };
  return { submitReport };
}
