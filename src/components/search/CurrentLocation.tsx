import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import palette from '../../styles/palette';
import { filterLocation } from '../../utils/filterLocation';

const CurrentLocation = () => {
  const address = useSelector((state: RootState) => state.loginState.address);

  const apartment: 'Y' | 'N' | '' = useSelector(
    (state: RootState) => state.postCodeState.apartment,
  );
  return (
    <Container>
      <CenterWrapper>
        <FlexRow>
          <Image
            width={14}
            height={16}
            src='/assets/images/location.svg'
            alt='위치 이미지'
          />
          <AddressText>
            현재 위치는<span>{filterLocation(apartment, address)}</span>
            입니다
          </AddressText>
        </FlexRow>
      </CenterWrapper>
    </Container>
  );
};

const Container = styled.button`
  all: unset;
  width: 100%;

  display: flex;
  align-items: center;

  margin-bottom: 20px;
`;

const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 5px;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const AddressText = styled.p`
  font-size: 0.875rem;

  color: ${palette.black};

  & > span {
    color: ${palette.mainOrange};
    margin: 0 5px;
  }
`;

export default CurrentLocation;
