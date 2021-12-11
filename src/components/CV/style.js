import styled from "styled-components";
import { FiPrinter } from "react-icons/fi";

export const Container = styled.div`
  /* position: fixed;
  top: 75px; */
  width: 100%;
  height: calc(100vh - 175px - 120px);
  height: 100%;
  padding: 3rem;
  font-size: 1rem;
  /* overflow-y: scroll; */
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
  /* text-align: center; */
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
  /* padding-bottom: 1rem; */
`;

export const Description = styled.p`
  /* padding-bottom: 1rem; */
`;

export const StyledPrintIcon = styled(FiPrinter)`
  font-size: 1.5rem;
  font-weight: bold;
`;