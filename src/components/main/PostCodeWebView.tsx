import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import Portal from '../common/Portal';
import { Address } from 'react-daum-postcode';
import { useDispatch } from 'react-redux';
import { patchBuildingCodeRequest } from '../../modules/search-post-code/actions';
import palette from '../../styles/palette';
import { PatchBuildingCodeRequestData } from '../../modules/search-post-code/types';

const PostCodeWebView = ({ closeWebView }: { closeWebView: () => void }) => {
  const dispatch = useDispatch();

  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = '';
    const userId = JSON.parse(localStorage.getItem('user')).id;
    const addressInfo: PatchBuildingCodeRequestData = {
      address: data.address,
      buildingCode: data.buildingCode,
      zonecode: data.zonecode,
    };

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(data);

    dispatch(patchBuildingCodeRequest(userId, addressInfo));
  };

  return (
    <Portal selector='webviewPortal'>
      <Background />
      <WebViewContainer>
        <DaumPostcode
          style={{ height: '100%', width: '100%' }}
          onComplete={handleComplete}
          onClose={closeWebView}></DaumPostcode>
        <CloseButton onClick={closeWebView}>닫기</CloseButton>
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
  right: 2%;
  bottom: 2%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${palette.mainOrange};
  color: #ffffff;

  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
`;

export default PostCodeWebView;
