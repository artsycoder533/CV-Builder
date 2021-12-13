import React from "react";
import { StyledInput, StyledLabel, Container } from "./style";

const DisplayInput = (props) => {
  const {
    name,
    label,
    index,
    value,
    type,
    placeholder,
    id,
    handleInput,
    pattern,
  } = props;
  return (
    <Container>
      <StyledLabel htmlFor={name}>{label}: </StyledLabel>
      <StyledInput
        onChange={(e) => handleInput(e, index)}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        id={id}
        pattern={pattern}
      />
    </Container>
  );
};
export default DisplayInput;
