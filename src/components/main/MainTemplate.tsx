import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import CategoryMenuSlide from "./CategoryMenuSlide";
import TabMenu from "./TabMenu";
import SearchPostCode from "./SearchPostCode";
import PostCodeWebView from "./PostCodeWebView";
import LoginModal from "../login/LoginModalTemplate";

import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import { useCheckValidate } from "../../hooks/useCheckValidate";
import { getBuildingCodeRequest } from "../../modules/search-post-code/actions";
import NoItemText from "./NoItemText";
import { useLoadLib } from "../../hooks/utils/useLoadLib";
import { useSelectLoginStates } from "../../hooks/select/useSelectLoginStates";
import ChatRoomList from "./ChatRoomList";
import { CategoriesResponse } from "../../modules/common/types";
import AddressModalTemplate from "./AddressModalTemplate";

const MainTemplate = ({
  foodCategories,
}: {
  foodCategories: CategoriesResponse[];
}) => {
  const { dispatch, router } = useLoadLib();
  const chatRooms = useSelector(
    (state: RootState) => state.mainPageState.chatRooms
  );

  const { checkTokenAndRedirection, openWebView, closeWebView } =
    useCheckValidate();

  const { user_id, accessToken } = useSelectLoginStates();

  const loginModalIsClicked = useSelector(
    (state: RootState) => state.modalStates.loginModalIsClicked
  );
  const searchPostCodeIsOpen = useSelector(
    (state: RootState) => state.modalStates.searchPostCodeIsOpen
  );

  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  useEffect(() => {
    if (accessToken) {
      dispatch(getBuildingCodeRequest(user_id));
    }
  }, [dispatch, user_id, accessToken, router]);

  const closeAddressAlertModal = useCallback(() => {
    setIsAddressModalOpen(false);
  }, [isAddressModalOpen]);

  const openAddressAlertModal = useCallback(() => {
    setIsAddressModalOpen(true);
  }, [isAddressModalOpen]);

  return (
    <Container>
      <SearchPostCode openWebView={openWebView} />
      <CategoryMenuSlide
        foodCategories={foodCategories}
        openAddressAlertModal={openAddressAlertModal}
      />
      {chatRooms.length <= 0 ? (
        <NoItemText
          checkTokenAndRedirection={checkTokenAndRedirection}
          openAddressAlertModal={openAddressAlertModal}
          isAddressModalOpen={isAddressModalOpen}
        />
      ) : (
        <ChatRoomList />
      )}
      {loginModalIsClicked && <LoginModal />}
      {searchPostCodeIsOpen && <PostCodeWebView closeWebView={closeWebView} />}
      {isAddressModalOpen && (
        <AddressModalTemplate
          closeAddressAlertModal={closeAddressAlertModal}
          isAddressModalOpen={isAddressModalOpen}
        />
      )}
      <TabMenu />
    </Container>
  );
};

const Container = styled.div`
  padding-top: 36px;
  background-color: #ffffff;
`;

export default React.memo(MainTemplate);
