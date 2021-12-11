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
  height: 100%;
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
  /* justify-content: center; */
  //align-items: center;
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
  display: grid;
  /* justify-content: center; */
  grid-template-columns: 1fr 1fr 1fr;
  /* align-items: center; */
  gap: 2rem;
  background: white;
  padding: 3rem;
  overflow-y: scroll;
  height: calc(100vh - 120px - 175px - 121px);
  position: fixed;
  bottom: 120px;
  top: 295px;
  max-width: 1400px;
  width: 90vw;
  border-radius: 10px;
`;
