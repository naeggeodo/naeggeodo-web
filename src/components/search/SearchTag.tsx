import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../styles/palette';

interface Props {
  children: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  dataValue: string;
  selected: string;
}

const SearchTag = ({ handleClick, children, dataValue, selected }: Props) => {
  return (
    <li>
      <TagButton
        onClick={handleClick}
        data-value={dataValue}
        selected={selected}>
        {children}
      </TagButton>
    </li>
  );
};

const TagButton = styled.button<{ selected: string }>`
  all: unset;

  background: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  font-size: 0.9375rem;

  ${(props) =>
    props['data-value'] === props.selected &&
    css`
      color: ${palette.mainOrange};
      background-color: #fdefe7;
    `}

  cursor: pointer;
`;

export default SearchTag;
