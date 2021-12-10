import styled from "styled-components";
import { FiCheck } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 1rem;
  height: 100px;
  position: fixed;
  /* position: relative; */
  top: 75px;
  background: white;

  @media print {
    display: none;
  }
`;

export const Circle = styled.div`
  border: 2px solid blue;
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  font-size: 25px;
  font-weight: bold;
  /* background: blue;
  color: white; */
  background: ${(props) => (props.current ? "blue" : "white")};
  color: ${(props) => (props.current ? "white" : "gray")};
  z-index: 2;

  transition: all 0.3s ease-in-out;
`;

export const Step = styled.div`
  display: grid;
  place-items: center;
  font-family: "Poppins", sans-serif;
`;

export const StyledFiCheck = styled(FiCheck)`
  font-weight: bold;
`;

export const StyledStatus = styled.p`
  color: purple;
  font-family: "Poppins", sans-serif;
  font-weight: ${(props) => (props.bold ? "bold" : "regular")};
`;
