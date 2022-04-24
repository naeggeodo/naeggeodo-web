import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import Image from 'next/image';

const SearchPostCode = ({ openWebView }: { openWebView: () => void }) => {
  return (
    <Container onClick={openWebView}>
      <CenterWrapper>
        <FlexRow>
          <Image
            width={14}
            height={16}
            src='/assets/images/location.svg'
            alt='위치 이미지'
          />
          <AddressText>서울 관악구 관악로 32번길</AddressText>
        </FlexRow>

        <Image
          width={11}
          height={16}
          src='/assets/images/arrowgrayright.svg'
          alt='오른쪽 화살표 이미지'
        />
      </CenterWrapper>
    </Container>
  );
};

const Container = styled.button`
  all: unset;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;

  cursor: pointer;
`;

const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 85%;
  height: 36px;

  padding: 0 10px 0 20px;
  background-color: ${palette.bgGray};

  border-radius: 5px;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const AddressText = styled.p`
  font-weight: 400;
  font-size: 0.75rem;

  color: ${palette.black};
`;

export default SearchPostCode;
