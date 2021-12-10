import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 75px - 100px - 120px);
  display: grid;
  grid-template-rows: auto 1fr;
  position: fixed;
  top: 175px;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 175px - 120px - 120px);
  overflow-y: scroll;
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
  padding: 1rem 0;

  @media screen and (min-width: 992px) {
    padding: 3rem;
  }
`;
