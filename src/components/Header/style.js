import styled from "styled-components";
import { FiDownload, FiTool } from "react-icons/fi";

export const Container = styled.header`
  height: 75px;
  background: blue;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  @media print {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  letter-spacing: 3px;
  font-family: "Staatliches", cursive;
  display: flex;
  align-items: center;
`;

export const StyledDownloadIcon = styled(FiDownload)`
  font-size: 2rem;
  font-weight: bold;
`;

export const StyledLogo = styled(FiTool)`
  color: red;
`;
