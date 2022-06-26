import React, { useRef } from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import Portal from '../common/Portal';
import { Address } from 'react-daum-postcode';
import { useDispatch } from 'react-redux';
import {
  patchBuildingCodeRequest,
  saveApartmentAddress,
} from '../../modules/search-post-code/actions';
import palette from '../../styles/palette';
import { PatchBuildingCodeRequestData } from '../../modules/search-post-code/types';
import { useSelectLoginStates } from '../../hooks/select/useSelectLoginStates';

const PostCodeWebView = ({ closeWebView }: { closeWebView: () => void }) => {
  const dispatch = useDispatch();
  const { user_id } = useSelectLoginStates();

  const handleComplete = (data: Address) => {
    const addressInfo: PatchBuildingCodeRequestData = {
      address: data.address,
      buildingCode: data.buildingCode,
      zonecode: data.zonecode,
    };

    if (data.apartment === 'N') {
      dispatch(saveApartmentAddress(data.apartment));
    } else if (data.apartment === 'Y') {
      dispatch(patchBuildingCodeRequest(user_id, addressInfo));
    }
  };

  return (
    <Portal selector="webviewPortal">
      <Background />
      <WebViewContainer>
        <DaumPostcode
          style={{ width: '100%' }}
          onComplete={handleComplete}
          onClose={closeWebView}></DaumPostcode>
        <CloseButton onPointerDown={closeWebView}>닫기</CloseButton>
      </WebViewContainer>
    </Portal>
  );
};

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  background-color: #000000;
  opacity: 0.7;

  z-index: 1;

  overflow: hidden;
  touch-action: none;
`;

const WebViewContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 80%;
  height: 500px;
  z-index: 2;

  transform: translate(-50%, -50%);
`;

const CloseButton = styled.button`
  all: unset;
  position: absolute;
  right: 3%;
  bottom: 22%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${palette.DarkGray};
  color: #ffffff;

  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
`;

export default PostCodeWebView;
