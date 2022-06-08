import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Popup = ({
  children,
  setPopupState,
}: {
  children: React.ReactNode;
  setPopupState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const closePopup = () => {
    if (window.confirm('정말 취소하시겠습니까?')) setPopupState('');
  };
  return (
    <Wrap>
      <Header>
        <CloseButton onClick={closePopup}>
          <Image
            src='/assets/images/close.svg'
            alt='닫기'
            width={16}
            height={16}
          />
        </CloseButton>
      </Header>
      <Contents>{children}</Contents>
    </Wrap>
  );
};

export default Popup;

const Wrap = styled.div`
  width: 86%;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 300;

  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 1000px 1000px rgba(0, 0, 0, 0.6);
`;

const Header = styled.div`
  text-align: right;
  padding: 10px 10px 0;
`;

const CloseButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 6px;
`;

const Contents = styled.div`
  padding: 0 20px 10px;
`;
