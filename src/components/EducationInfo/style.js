import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 75px - 80px - 100px - 70px);
  display: grid;
  position: fixed;
  top: 250px;
  padding-bottom: 0.5rem;
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

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  flex-wrap: wrap;
`;
