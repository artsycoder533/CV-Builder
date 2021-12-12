import React, { useState } from 'react';
import DisplayInput from "../DisplayInput/DisplayInput";
import DisplayCheckbox from "../DisplayCheckbox/DisplayCheckbox";
import DisplayTextarea from "../DisplayTextArea/DisplayTextArea";
import uniqid from "uniqid";
import { StyledFormWithScroll } from "../Form/style";
import {
  AbsoluteIconButton,
  StyledTrashIcon,
  AbsoluteTrashButton,
  SaveButton,
  StyledSaveIcon,
} from "../Button/style";
import { Container, EntryWrapper, FormWrapper, StyledError } from "./style";
import { StyledTitle } from "../Title/style";
import { StyledAddIcon } from "../EducationInfo/style";

const ExperienceInfoForm = (props) => {

    const [errors, setErrors] = useState({
      titleErr: "",
      companyErr: "",
      startDateErr: "",
      endDateErr: "",
      dutiesErr: "",
    });
  
  const validateErrors = (index) => {
    let titleError, companyError, startDateError, endDateError, dutiesError;
    let isValid = true;
    const { title, company, startDate, endDate, duties, employed } = experience[index];
    if (title.trim() === "") {
      titleError = "Title must not be empty";
      isValid = false;
    }
    if (company.trim() === "") {
      companyError = "Company must not be empty";
      isValid = false;
    }
      if (startDate === "") {
        startDateError = "Must select a start date";
        isValid = false;
    }
    if (employed !== true) {
      if (endDate === "") {
        endDateError = "Must select an end date";
        isValid = false;
      }
    }
    if (duties.trim() === "") {
      dutiesError = "Duties must not be blank";
      isValid = false;
    }
    setErrors({
      titleErr: titleError,
      companyErr: companyError,
      startDateErr: startDateError,
      endDateErr: endDateError,
      dutiesErr: dutiesError,
    });
    return isValid;
  }

    const handleInput = (e, index) => {
        const copyOfState = [...experience];
        let entry = copyOfState[index];
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        const type = e.currentTarget.type;
        type === "checkbox"
          ? (entry[name] = e.currentTarget.checked)
            : (entry[name] = value);
        props.setExperience(copyOfState);
    }

  const handleSubmit = (e, index) => {
    e.preventDefault();
    const isValid = validateErrors(index);
    isValid ? props.setValid(true) : props.setValid(false);
  }

    const deleteEntry = (index) => {
        const copyOfState = [...experience];
        copyOfState.splice(index, 1);
        props.setExperience(copyOfState);
    }

    const addNewEntry = () => {
        const copyOfState = [...props.experience];
        copyOfState.push({
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      employed: "",
      duties: "",
      id: uniqid(),
        });
        props.setExperience(copyOfState);
    }

  const { experience } = props;
  const { titleErr, companyErr, startDateErr, endDateErr, dutiesErr } = errors;
    return (
      <Container>
        <StyledTitle>Experience</StyledTitle>
        <FormWrapper>
          <StyledFormWithScroll action="">
            {experience.map((entry, index) => {
              const {
                title,
                company,
                startDate,
                endDate,
                employed,
                duties,
                id,
              } = entry;
              return (
                <EntryWrapper key={id}>
                  <div>
                    <DisplayInput
                      label="Job Title"
                      name="title"
                      value={title}
                      type="text"
                      handleInput={handleInput}
                      placeholder="enter job title"
                      index={index}
                      id={id}
                    />
                    <StyledError>{titleErr}</StyledError>
                  </div>
                  <div>
                    <DisplayInput
                      label="Company"
                      name="company"
                      value={company}
                      type="text"
                      handleInput={handleInput}
                      placeholder="enter company name"
                      index={index}
                      id={id}
                    />
                    <StyledError>{companyErr}</StyledError>
                  </div>
                  <DisplayCheckbox
                    label="Check if still employed"
                    name="employed"
                    value={employed}
                    handleInput={handleInput}
                    index={index}
                    id={id}
                  />
                  <div>
                    <DisplayInput
                      label="Date Started"
                      name="startDate"
                      value={startDate}
                      type="date"
                      handleInput={handleInput}
                      index={index}
                      id={id}
                    />
                    <StyledError>{startDateErr}</StyledError>
                  </div>
                  {employed ? (
                    ""
                  ) : (
                    <React.Fragment>
                      <div>
                        <DisplayInput
                          label="Date Ended"
                          name="endDate"
                          value={endDate}
                          type="date"
                          handleInput={handleInput}
                          index={index}
                          id={id}
                        />
                        <StyledError>{endDateErr}</StyledError>
                      </div>
                    </React.Fragment>
                  )}
                  <div>
                    <DisplayTextarea
                      type={"textarea"}
                      label={"Duties"}
                      placeholder="Enter job duties.  Try to keep it short."
                      value={duties}
                      name="duties"
                      cols={20}
                      rows={5}
                      index={index}
                      handleInput={handleInput}
                    />
                    <StyledError>{dutiesErr}</StyledError>
                  </div>
                  <SaveButton
                    type="submit"
                    onClick={(e) => handleSubmit(e, index)}>
                    Save <StyledSaveIcon />
                  </SaveButton>
                  {index === 0 ? (
                    ""
                  ) : (
                    <AbsoluteTrashButton
                      type="button"
                      onClick={() => deleteEntry(index)}>
                      <StyledTrashIcon />
                    </AbsoluteTrashButton>
                  )}
                </EntryWrapper>
              );
            })}
          </StyledFormWithScroll>
        </FormWrapper>
        <AbsoluteIconButton type="button" onClick={() => addNewEntry()}>
          <StyledAddIcon />
        </AbsoluteIconButton>
      </Container>
    );
}

export default ExperienceInfoForm;