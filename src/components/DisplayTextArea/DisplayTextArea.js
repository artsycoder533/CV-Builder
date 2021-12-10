import React from "react";
import { StyledTextArea, StyledLabel } from "./style";

const DisplayTextArea = (props) => {
  const {
    type,
    label,
    name,
    cols,
    rows,
    index,
    handleInput,
    value,
    placeholder,
  } = props;
  return (
    <div>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <br />
      <StyledTextArea
        type={type}
        name={name}
        cols={cols}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={(e) => handleInput(e, index)}
      />
    </div>
  );
};

export default DisplayTextArea;
