import {
  setReportConfirmModal,
  setReportModal,
} from '../modules/mypage/actions';
import { ReportRequestBody } from '../modules/mypage/types';
import { MypageService } from '../service/api/mypage/MypageService';
import { useLoadLib } from './utils/useLoadLib';

export function useReport() {
  const { dispatch } = useLoadLib();

  const submitReport = async (body: ReportRequestBody) => {
    const response = await MypageService.asyncSubmitReport(body);
    const data = await response.data;
    if (data) {
      dispatch(dispatch(setReportModal('')));
      dispatch(dispatch(setReportConfirmModal('alert')));
      setTimeout(() => {
        dispatch(dispatch(setReportConfirmModal('')));
      }, 1500);
    }
    return data;
  };
  return { submitReport };
}
