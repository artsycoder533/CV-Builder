import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 75px - 80px - 100px - 75px);
  display: grid;
  position: fixed;
  top: 255px;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  
  padding: 1rem 0;
  width: 100%;
`;

export const EntryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  border-radius: 10px;
  padding: 1rem;
  background: white;

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    padding: 3rem;
  }
`;

export const GeneralForm = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1400px;
  width: 90vw;
  border-radius: 8px;
  padding: 1rem;
  height: calc(100vh - 75px - 80px - 100px - 80px);
  overflow-y: scroll;
  border: 2px solid red;

  @media screen and (min-width: 992px) {
    /* padding: 3rem; */
  }
`;

export const StyledError = styled.small`
  color: red;
  font-weight: bold;
  transition: 0.3ms all ease-in-out;
`;