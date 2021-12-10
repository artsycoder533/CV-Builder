import styled from "styled-components";
import { FiCheck } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 1rem;
  height: 80px;
  position: fixed;
  /* position: relative; */
  top: 75px;
  left: 0;
  background: white;
  border: 2px solid red;

  @media print {
    display: none;
  }
`;

export const Circle = styled.div`
  border: 2px solid blue;
  width: 40px;
  height: 40px;
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
