import React from "react";
import styled from "styled-components";

type PropsType = {
  children: string;
};
const MainBtn = ({ children }: PropsType) => {
  return <button>{children}</button>;
};

export default MainBtn;
