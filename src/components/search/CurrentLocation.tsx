import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useSelectLoginStates } from '../../hooks/select/useSelectLoginStates';
import { RootState } from '../../modules';
import palette from '../../styles/palette';
import {
  filterLocation,
  filterLocationInSearchPage,
} from '../../utils/filterLocation';

const CurrentLocation = () => {
  const { address, accessToken } = useSelectLoginStates();

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
            <span>{filterLocationInSearchPage(address, accessToken)}</span>
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
