import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 0.75rem;
  width: 100%;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;

  &:focus {
    background: rgba(228, 241, 254, 0.7);
  }
`;

export const StyledLabel = styled.label`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-family: "Poppins", sans-serif;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
