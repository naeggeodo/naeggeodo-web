import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../modules";
import {
  closeReportConfirmModalActions,
  getUserInfoInMypageRequest,
  setReportModal,
} from "../../modules/mypage/actions";
import palette from "../../styles/palette";
import LoginModal from "../login/LoginModalTemplate";
import TabMenu from "../main/TabMenu";
import CustomerServiceSection from "./CustomerServiceSection";
import MypageUserInfo from "./MypageUserInfo";
import CancelConfirmModal from "./report/CancelConfirmModal";
import ComplainForm from "./report/ComplainForm";
import CompleteAlertModal from "./report/CompleteAlertModal";
import FeedbackForm from "./report/FeedbackForm";
import Terms from "./Terms";
import UserManagement from "./UserManagement";

// ? 더보기 페이지 (마이페이지)
// ? url : /mypage

const MypageTemplate = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { reportModal, reportConfirmModal } = useSelector(
    (state: RootState) => state.myPageState
  );

  const loginModalIsClicked = useSelector(
    (state: RootState) => state.modalStates.loginModalIsClicked
  );

  const { accessToken, user_id } = useSelector(
    (state: RootState) => state.loginState
  );

  useEffect(() => {
    if (!accessToken) {
      router.replace("/login");
    } else {
      dispatch(getUserInfoInMypageRequest(user_id));
    }
  }, []);

  const onAllModalClose = () => {
    dispatch(setReportModal(""));
    dispatch(closeReportConfirmModalActions.request());
  };

  return (
    <React.Fragment>
      <Container>
        <MypageUserInfo />
        <Bar />

        <CustomerServiceSection />

        <Terms />

        <UserManagement />
      </Container>

      {loginModalIsClicked && <LoginModal />}
      {reportModal === "feedback" && <FeedbackForm />}
      {reportModal === "complain" && <ComplainForm />}
      {reportConfirmModal === "alert" && <CompleteAlertModal />}
      {reportConfirmModal === "cancel" && (
        <CancelConfirmModal onAgree={onAllModalClose} />
      )}

      <TabMenu />
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 100%;

  background-color: #fff;
  padding: 46px 0 83px;
`;

const Bar = styled.div`
  height: 8px;
  margin-top: 20px;

  background-color: ${palette.LightGray2};
  opacity: 0.5;
`;

export default MypageTemplate;
