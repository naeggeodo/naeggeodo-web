import React from "react";
type PropsType = {
  textValue: string;
};
const Input = ({ textValue }: PropsType) => {
  return <input type="text" value={textValue} />;
};

export default Input;
