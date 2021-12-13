import styled from "styled-components";
import { SaveButton } from "../Button/style";

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
  height: 100%;
`;

export const EntryWrapper = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  border-radius: 10px;
  padding: 1rem;
  background: white;
  width: 100%;
  height: auto;
  justify-content: center;
`;

export const SkillsForm = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 1400px;
  width: 90vw;
  border-radius: 8px;
  padding: 1rem;
  overflow-y: scroll;
  height: calc(100vh - 120px - 175px - 121px);
`;

export const StyledFormWithScroll = styled.form`
  display: grid;
  justify-content: center;

  align-items: center;
  gap: 2rem;
  background: white;
  padding: rem;
  overflow-y: scroll;
  height: calc(100vh - 120px - 175px - 121px);
  position: fixed;
  bottom: 120px;
  top: 295px;
  max-width: 1400px;
  width: 90vw;
  border-radius: 10px;

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 3rem;
  }
`;

export const StyledError = styled.small`
  color: red;
  font-weight: bold;
  transition: 0.3ms all ease-in-out;
`;

export const SaveButton2 = styled(SaveButton)`
  position: relative;
  right: 0;
`;
