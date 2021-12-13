import React, { useState } from "react";
import DisplayInput from "../DisplayInput/DisplayInput";
import { StyledTitle } from "../Title/style";
import {
  Container,
  FormWrapper,
  StyledFormWithScroll,
  EntryWrapper,
  StyledError,
  SaveButton2,
} from "./style";
import {
  AbsoluteIconButton,
  AbsoluteSkillsTrashButton,
  StyledSaveIcon,
  StyledTrashIcon,
} from "../Button/style";
import { StyledAddIcon } from "../EducationInfo/style";

const SkillsInfoForm = (props) => {
  const { skills, setSkills, valid, setValid } = props;
  const [currentEntry, setCurrentEntry] = useState(0);
  const [errors, setErrors] = useState({
    skillErr: "",
  });

  const validateErrors = (index) => {
    let skillError;
    let isValid = true;
    const skill = skills[index];
    if (skill.trim() === "") {
      skillError = "Skill must not be blank";
      isValid = false;
    }
    setErrors({
      skillErr: skillError,
    });
    return isValid;
  };

  const handleSubmit = (e, index) => {
    e.preventDefault();
    const isValid = validateErrors(index);
    isValid ? props.setValid(true) : props.setValid(false);
    setCurrentEntry(index);
    localStorage.setItem("skillList", JSON.stringify(skills));
  };

  const handleInput = (e, index) => {
    e.preventDefault();
    const copyOfState = [...skills];
    copyOfState[index] = e.currentTarget.value;
    setSkills(copyOfState);
  };

  const deleteEntry = (index) => {
    const copyOfState = [...skills];
    copyOfState.splice(index, 1);
    setSkills(copyOfState);
  };

  const addNewEntry = () => {
    const copyOfState = [...skills];
    copyOfState.push("");
    setSkills(copyOfState);
    setValid(false);
  };

  const { skillErr } = errors;
  return (
    <Container>
      <StyledTitle>Skills</StyledTitle>
      <FormWrapper>
        <StyledFormWithScroll>
          {skills.length < 1 ? (
            <h4>
              No skills added, press "+" to add a skill. If no skills are added,
              this section will be excluded from the CV."
            </h4>
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
                    {currentEntry === index ? (
                      <StyledError>{skillErr}</StyledError>
                    ) : (
                      ""
                    )}
                  </div>
                  <SaveButton2
                    type="submit"
                    onClick={(e) => handleSubmit(e, index)}>
                    Save <StyledSaveIcon />
                  </SaveButton2>
                  <AbsoluteSkillsTrashButton
                    type="button"
                    aria-label="delete entry button"
                    onClick={() => deleteEntry(index)}>
                    <StyledTrashIcon />
                  </AbsoluteSkillsTrashButton>
                </EntryWrapper>
              );
            })
          )}
        </StyledFormWithScroll>
      </FormWrapper>
      {valid === true ? (
        <AbsoluteIconButton
          type="button"
          onClick={() => addNewEntry()}
          aria-label="add new entry button">
          <StyledAddIcon />
        </AbsoluteIconButton>
      ) : (
        ""
      )}
    </Container>
  );
};

export default SkillsInfoForm;
