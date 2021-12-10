import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 120px - 75px - 100px);
  display: grid;
  grid-template-rows: auto 1fr;
  /* border: 2px solid green; */
  position: fixed;
  top: 175px;
`;

export const EntryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  border-radius: 10px;
  padding: 1rem;
  background: white;

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    padding: 3rem;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledAddIcon = styled(FiPlus)`
  font-size: 2rem;
  font-weight: bold;
`;
