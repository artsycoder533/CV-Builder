import React, { useState } from 'react';
import DisplayInput from '../DisplayInput/DisplayInput';
import { StyledTitle } from '../Title/style';
import {
  Container,
  FormWrapper,
  SkillsForm,
    StyledFormWithScroll,
  EntryWrapper
} from "./style";
import {
  AbsoluteIconButton,
  AbsoluteSkillsTrashButton,
  AbsoluteTrashButton,
  IconButton,
  PlainButton,
  StyledTrashIcon,
} from "../Button/style";
import { StyledAddIcon } from "../EducationInfo/style";
import uniqid from 'uniqid';

const SkillsInfoForm = (props) => {
  const { skills, setSkills } = props;

  const handleInput = (e, index) => {
    e.preventDefault();
      const copyOfState = [...skills];
      copyOfState[index] = e.currentTarget.value;
      setSkills(copyOfState);
    }

    const deleteEntry = (index) => {
      const copyOfState = [...skills];
      copyOfState.splice(index, 1);
      setSkills(copyOfState);
    }

    const addNewEntry = () => {
      const copyOfState = [...skills];
      copyOfState.push("");
      setSkills(copyOfState);
    }

    return (
      <Container>
        <StyledTitle>Skills</StyledTitle>
        <FormWrapper>
          <SkillsForm>
            {skills.length < 1 ? (
              <h4>No skills added, press "+" to add a skill"</h4>
            ) : (
              skills.map((skill, index) => {
                return (
                  <EntryWrapper key={index}>
                    <DisplayInput
                      label="Skill"
                      name="skill"
                      value={skill}
                      placeholder="enter skill"
                      handleInput={handleInput}
                      index={index}
                    />
                    <AbsoluteSkillsTrashButton
                      type="button"
                      onClick={() => deleteEntry(index)}>
                      <StyledTrashIcon />
                    </AbsoluteSkillsTrashButton>
                  </EntryWrapper>
                );
              })
            )}
          </SkillsForm>
        </FormWrapper>
        <AbsoluteIconButton type="button" onClick={() => addNewEntry()}>
          <StyledAddIcon />
        </AbsoluteIconButton>
      </Container>
    );
}

export default SkillsInfoForm;