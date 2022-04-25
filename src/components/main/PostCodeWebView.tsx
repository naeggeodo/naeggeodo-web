import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import Portal from '../common/Portal';
import { Address } from 'react-daum-postcode';
import { useDispatch } from 'react-redux';
import { saveAddresWithBuildingCode } from '../../modules/search-post-code/actions';

const PostCodeWebView = ({ closeWebView }: { closeWebView: () => void }) => {
  const dispatch = useDispatch();

  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = '';

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

    dispatch(saveAddresWithBuildingCode(data));
  };

  return (
    <Portal selector='webviewPortal'>
      <Background />
      <WebViewContainer>
        <DaumPostcode
          style={{ height: '100%', width: '100%' }}
          onComplete={handleComplete}
          onClose={closeWebView}
        />
      </WebViewContainer>
    </Portal>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

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

export default PostCodeWebView;
