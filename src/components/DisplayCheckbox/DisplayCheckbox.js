import React from 'react';
import { Container, StyledCheckbox, StyledLabel } from './style';

const DisplayCheckbox = (props) => {
    const { name, value, label, handleInput, index } = props;
    return (
      <Container>
        <StyledCheckbox
          type="checkbox"
          name={name}
          value={value}
          checked={value}
          onChange={(e) => handleInput(e, index)}
        />
        <StyledLabel>{label}</StyledLabel>
      </Container>
    );
}
export default DisplayCheckbox;