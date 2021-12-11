import React from 'react';
import { StyledLabel, StyledOption, StyledSelect, Container } from "./style";
import uniqid from "uniqid";

const DisplaySelect = (props) => {
    const { label, value, name, handleInput, index, options } = props;
    return (
      <React.Fragment>
        <StyledLabel>{label}</StyledLabel>
        <StyledSelect
          name={name}
          value={value}
          onChange={(e) => handleInput(e, index)}>
          <StyledOption disabled value="">
            {"Select Level"}
          </StyledOption>
          {options.map((level) => {
            return <option key={uniqid()}>{level}</option>;
          })}
        </StyledSelect>
      </React.Fragment>
    );
};

export default DisplaySelect;