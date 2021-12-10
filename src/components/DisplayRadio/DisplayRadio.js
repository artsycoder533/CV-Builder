import React, {useState} from "react";
import { StyledRadio, Container } from "./style";

const DisplayRadio = (props) => {
    const [values, setValues] = useState(["Yes", "No"]);
    
  const {name, graduate, handleInput, index} = props;
  return (
    <Container>
      <span>Did you graduate?</span>
          {values.map((val) => {
        return (
          <div>
            <StyledRadio
              type="radio"
              name={name}
              value={val}
              checked={graduate === val}
              onChange={(e) => handleInput(e, index)}
            />
            <label htmlFor={name}>{val}</label>
          </div>
        );
      })}
    </Container>
  );
};
export default DisplayRadio;