import styled from "styled-components";
import { FiArrowRight, FiArrowLeft, FiSend } from "react-icons/fi";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  gap: 8rem;
  padding: 2rem;
  height: 120px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
  background: white;
  border-top: 1px solid lightgray;

  @media print {
    display: none;
  }
`;

export const StyledRightIcon = styled(FiArrowRight)`
  font-size: 2rem;
  font-weight: bold;
`;

export const StyledLeftIcon = styled(FiArrowLeft)`
  font-size: 2rem;
  font-weight: bold;
`;

export const StyledSendIcon = styled(FiSend)`
  font-size: 2rem;
  font-weight: bold;
`;
