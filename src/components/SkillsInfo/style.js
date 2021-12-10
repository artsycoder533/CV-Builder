import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 120px - 75px - 100px);
  display: grid;
  grid-template-rows: auto 1fr;
  /* border: 2px solid green; */
  position: fixed;
  top: 175px;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const EntryWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 1rem;
  background: white;
`;

export const SkillsForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1400px;
  width: 90vw;
  border-radius: 8px;
  padding: 1rem;
  overflow-y: scroll;
  height: calc(100vh - 120px - 175px - 121px);
  /* background: white; */
`;

export const StyledFormWithScroll = styled.form`
  /* width: 100%; */
  display: grid;
  gap: 2rem;
  background: white;
  padding: 3rem 0;
  overflow-y: scroll;
  height: calc(100vh - 120px - 175px - 121px);
  position: fixed;
  bottom: 120px;
  top: 295px;
  max-width: 1400px;
  width: 90vw;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 2px solid black;
`;
