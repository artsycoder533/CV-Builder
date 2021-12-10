import React, { useState } from 'react';
import DisplayInput from "../DisplayInput/DisplayInput";
import DisplayCheckbox from "../DisplayCheckbox/DisplayCheckbox";
import DisplayTextarea from "../DisplayTextArea/DisplayTextarea";
import uniqid from "uniqid";
import { StyledFormWithScroll } from "../Form/style";
import {
  AbsoluteIconButton,
  StyledTrashIcon,
  AbsoluteTrashButton,
} from "../Button/style";
import { Container, EntryWrapper, FormWrapper } from "./style";
import { StyledTitle } from "../Title/style";
import { StyledAddIcon } from "../EducationInfo/style";

const ExperienceInfoForm = (props) => {
    const handleInput = (e, index) => {
        
    }

    const deleteEntry = (index) => {
        
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

    const { experience, setExperience } = props;
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
                  <DisplayCheckbox
                    label="Check if still employed"
                    name="employed"
                    value={employed}
                    handleInput={handleInput}
                    index={index}
                    id={id}
                  />
                  <DisplayInput
                    label="Date Started"
                    name="startDate"
                    value={startDate}
                    type="date"
                    handleInput={handleInput}
                    index={index}
                    id={id}
                  />
                  {employed ? (
                    ""
                  ) : (
                    <React.Fragment>
                      <DisplayInput
                        label="Date Ended"
                        name="endDate"
                        value={endDate}
                        type="date"
                        handleInput={handleInput}
                        index={index}
                        id={id}
                      />
                    </React.Fragment>
                  )}
                  <DisplayTextarea
                    type={"textarea"}
                    label={"Duties"}
                    placeholder="Enter job duties.  Try to keep it short."
                    value={duties}
                    name="duties"
                    cols={30}
                    rows={10}
                    index={index}
                    handleInput={handleInput}
                  />
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