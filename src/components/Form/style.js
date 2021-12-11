import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1400px;
  width: 90vw;
  border-radius: 8px;
  padding: 3rem;
  background: white;
`;

export const StyledFormWithScroll = styled.form`
  width: 100%;
  display: grid;
  gap: 2rem;
  /* padding: 2rem; */
  overflow-y: scroll;
  height: calc(100vh - 120px - 175px - 121px);
  position: fixed;
  bottom: 120px;
  top: 295px;
  max-width: 1400px;
  width: 90vw;
 

  @media screen and (min-width: 992px) {
    /* padding: 3rem; */
  }
`;
