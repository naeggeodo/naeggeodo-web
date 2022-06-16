import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import palette from '../../../styles/palette';

interface Props {
  dataValue?: number;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  item: string;
}

const TagButton = ({ dataValue, handleClick, item }: Props) => {
  return (
    <Container data-value={dataValue} onClick={handleClick}>
      <Image
        src='/assets/images/buttonclose.svg'
        width={12}
        height={12}
        alt='닫기 버튼'
      />
      <span>{item}</span>
    </Container>
  );
};

const Container = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  gap: 4px;

  font-weight: 500;
  font-size: 0.75rem;

  display: flex;
  align-items: center;

  color: #191919;

  padding: 4px 10px;

  background-color: ${palette.LightGray2};
  border-radius: 5px;

  cursor: pointer;
`;

export default TagButton;
