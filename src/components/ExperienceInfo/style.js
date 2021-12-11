import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 75px - 80px - 100px - 70px);
  display: grid;
  grid-template-rows: auto 1fr;
  position: fixed;
  top: 250px;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
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
