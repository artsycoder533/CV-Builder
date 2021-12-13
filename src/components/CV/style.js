import styled from "styled-components";
import { FiPrinter } from "react-icons/fi";
import { StyledButton } from "../Button/style";

export const Container = styled.div`
  width: 100%;
  padding: 3rem;
  font-size: 1rem;
`;

export const StyledTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const StyledSectionTitle = styled.h2`
  font-size: 1.5rem;
  background: black;
  color: white;
  padding: 0.5rem;
  text-transform: uppercase;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  margin-top: 1rem;
`;

export const JobTitle = styled.h3`
  padding: 1rem 0;
`;

export const JobDate = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.p`
  /* padding-bottom: 1rem; */
`;

export const StyledPrintIcon = styled(FiPrinter)`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const PrintButton = styled(StyledButton)`
  position: absolute;
  background: red;
  left: 0;
  padding: 0.7rem;
`;

export const Wrapper = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 75px);
`;