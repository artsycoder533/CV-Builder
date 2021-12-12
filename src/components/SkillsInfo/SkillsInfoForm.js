import React, { useState } from 'react';
import DisplayInput from '../DisplayInput/DisplayInput';
import { StyledTitle } from '../Title/style';
import {
  Container,
  FormWrapper,
  SkillsForm,
    StyledFormWithScroll,
  EntryWrapper,
  StyledError
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

  const [errors, setErrors] = useState({
    skillErr: ""
  });

  const validateErrors = (index) => {
    let skillError;
    let isValid = true;
    const { skill } = skill[index];
    if (skill.trim() === "") {
     skillError = "Skill must not be blank";
      isValid = false;
    }
       setErrors({
         skillErr: skillError,
       });
       return isValid;
  }

  const handleSubmit = (e, index) => {
    e.preventDefault();
    const isValid = validateErrors(index);
    isValid ? props.setValid(true) : props.setValid(false);
  }
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

  const { skillErr } = errors;
    return (
      <Container>
        <StyledTitle>Skills</StyledTitle>
        <FormWrapper>
          <StyledFormWithScroll>
            {skills.length < 1 ? (
              <h4>No skills added, press "+" to add a skill.  If no skills are added, this section will be excluded from the CV."</h4>
            ) : (
              skills.map((skill, index) => {
                return (
                  <EntryWrapper key={index}>
                    <div>
                      <DisplayInput
                        label="Skill"
                        name="skill"
                        value={skill}
                        placeholder="enter skill"
                        handleInput={handleInput}
                        index={index}
                      />
                      <StyledError>{skillErr}</StyledError>
                    </div>
                    <AbsoluteSkillsTrashButton
                      type="button"
                      onClick={() => deleteEntry(index)}>
                      <StyledTrashIcon />
                    </AbsoluteSkillsTrashButton>
                  </EntryWrapper>
                );
              })
            )}
          </StyledFormWithScroll>
        </FormWrapper>
        <AbsoluteIconButton type="button" onClick={() => addNewEntry()}>
          <StyledAddIcon />
        </AbsoluteIconButton>
      </Container>
    );
}

export default SkillsInfoForm;