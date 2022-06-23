import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled, { css } from "styled-components";
import palette from "../../styles/palette";
import { TabItem } from "./types";

type StyledButtonProps = {
  active?: boolean;
};

interface StyledImageProps {
  routerfirstpath: string;
  link: string;
}

const TabButtonItem: React.FC<TabItem> = (props) => {
  const router = useRouter();
  const routerfirstpath: string = router.pathname
    .split("/")
    .slice(0, 2)
    .join("/");

  return (
    <Link href={props.link} passHref>
      <TabButton
        rel="noreferrer noopener"
        active={routerfirstpath === props.link ? true : false}
      >
        <div>
          <StyledImage
            src={props.image}
            alt={props.altText}
            width={20}
            height={20}
            routerfirstpath={routerfirstpath}
            link={props.link}
          />
          {props.title}
        </div>
      </TabButton>
    </Link>
  );
};

const TabButton = styled.a<StyledButtonProps>`
  display: flex;
  align-items: center;

  font-size: 0.875rem;
  color: ${(props) => (props.active ? "#000" : palette.LineGray)};

  text-decoration: none;
  background-color: transparent;
  cursor: pointer;

  & > div {
    height: 45px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledImage = styled(Image)<StyledImageProps>`
  ${(props) =>
    props.routerfirstpath === props.link &&
    css`
      filter: invert(1);
    `}
`;

export default TabButtonItem;
