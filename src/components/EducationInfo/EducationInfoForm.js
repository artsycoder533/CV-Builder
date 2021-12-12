import React, { useState, useEffect } from "react";
import DisplayInput from "../DisplayInput/DisplayInput";
import DisplayRadio from "../DisplayRadio/DisplayRadio";
import DisplayCheckbox from "../DisplayCheckbox/DisplayCheckbox";
import DisplaySelect from "../DisplaySelect/DisplaySelect";
import {
  AbsoluteIconButton,
  AbsoluteTrashButton,
  IconButton,
  SaveButton,
  StyledSaveIcon,
  StyledTrashIcon,
} from "../Button/style";
import uniqid from "uniqid";
import {
  ButtonWrapper,
  Container,
  EntryWrapper,
  StyledAddIcon,
  FormWrapper,
  StyledWrapper,
} from "./style";
import { EducationForm, StyledForm, StyledFormWithScroll } from "../Form/style";
import { StyledTitle } from "../Title/style";

const EducationInfoForm = (props) => {
  const [degreeOptions, setDegreeOptions] = useState([
    "Bachelors",
    "Masters",
    "Certificate",
    "Doctorate",
  ]);
  const [designationOptions, setDesignationOptions] = useState([
    "Science",
    "Arts",
  ]);

  const [errors, setErrors] = useState({
    schoolErr: "",
    majorErr: "",
    dateStartedErr: "",
    degreeErr: "",
    designationErr: ""
    
  });

  const handleSubmit = (e, index) => {
    e.preventDefault();
    const isValid = validateErrors(index);
    isValid ? props.setValid(true) : props.setValid(false);
  };

  const handleInput = (e, index) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    const type = e.currentTarget.type;
    const copyOfEducation = [...props.education];
    let entry = copyOfEducation[index];
    type === "checkbox"
      ? (entry[name] = e.currentTarget.checked)
      : (entry[name] = value);

    type === "radio" ? (entry.graduate = value) : (entry.graduate = "");
    props.setEducation([...copyOfEducation]);
    //add to local storage
  };

  const deleteEntry = (index) => {
    const copyOfState = [...props.education];
    copyOfState.splice(index, 1);
    props.setEducation(copyOfState);
  };

  const addNewEntry = () => {
    const copyOfState = [...props.education];
    copyOfState.unshift({
      school: "",
      major: "",
      startDate: "",
      endDate: "",
      gpa: "",
      minor: "",
      attending: "",
      graduate: "",
      degree: "",
      designation: "",
      id: uniqid(),
    });
    props.setEducation(copyOfState);
  };

  const validateErrors = (index) => {
    let schoolError, majorError, startDateError, endDateError, degreeError;
    let isValid = true;
    const { school, major, startDate, endDate, degree } = education[index];
     if (school.trim() === "" || school.match(/\d/)) {
       schoolError = "School name must not be empty";
       isValid = false;
    }
     if (major.trim() === "" || major.match(/\d/)) {
       majorError = "Major/course of study must not be empty";
       isValid = false;
    }
     if (startDate ==="") {
      startDateError = "Must select a start date";
       isValid = false;
    }
    if (education[index]["attending"] !== true) {
      if (endDate === "") {
        endDateError = "Must select an end date";
        isValid = false;
      }
    }
     
    if (degree === "") {
      degreeError = "A degree must be selected";
      isValid = false;
    }
    setErrors({
      majorErr: majorError,
      schoolErr: schoolError,
      startDateErr: startDateError,
      endDateErr: endDateError,
      degreeErr: degreeError
    });
    return isValid;
  };


  const { education } = props;
  const { schoolErr, majorErr, startDateErr, endDateErr, degreeErr } = errors;
  return (
    <Container>
      <StyledTitle>Education</StyledTitle>
      <FormWrapper>
        <StyledFormWithScroll
          action=""
          onSubmit={handleSubmit}
          className="education_form">
          {education.map((entry, index) => {
            const {
              school,
              major,
              startDate,
              endDate,
              attending,
              graduate,
              minor,
              designation,
              degree,
              gpa,
              id,
            } = entry;

            return (
              <EntryWrapper key={id}>
                <div>
                  <DisplayInput
                    label="School"
                    name="school"
                    value={school}
                    type="text"
                    handleInput={handleInput}
                    placeholder="enter school name"
                    index={index}
                    id={id}
                  />
                  <small style={{ color: "red" }}>{schoolErr}</small>
                </div>
                <div>
                  <DisplayInput
                    label="Major/Course of Study"
                    name="major"
                    value={major}
                    type="text"
                    handleInput={handleInput}
                    placeholder="enter major"
                    index={index}
                    id={id}
                  />
                  <small style={{ color: "red" }}>{majorErr}</small>
                </div>
                <DisplayInput
                  label="Minor"
                  name="minor"
                  value={minor}
                  type="text"
                  handleInput={handleInput}
                  placeholder="enter minor (optional)"
                  index={index}
                  id={id}
                />
                {graduate === "Yes" ? (
                  ""
                ) : (
                  <DisplayCheckbox
                    label="Check if still attending"
                    name="attending"
                    value={attending}
                    handleInput={handleInput}
                    index={index}
                    id={id}
                  />
                )}
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
                  <small style={{ color: "red" }}>{startDateErr}</small>
                </div>
                {attending === true ? (
                  ""
                ) : (
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
                    <small style={{ color: "red" }}>{endDateErr}</small>
                  </div>
                )}

                {attending === true ? (
                  <DisplayInput
                    label="GPA"
                    name="gpa"
                    value={gpa}
                    type="text"
                    handleInput={handleInput}
                    placeholder="ex: 4.0 (optional)"
                    index={index}
                    id={id}
                  />
                ) : (
                  <div className="radios">
                    <DisplayRadio
                      label="Yes"
                      name={`graduate${index}`}
                      graduate={graduate}
                      handleInput={handleInput}
                      index={index}
                      id={id}
                    />
                  </div>
                )}
                {graduate === "No" ? (
                  ""
                ) : (
                  <React.Fragment>
                    <div>
                      <DisplaySelect
                        label={"Degree"}
                        value={degree}
                        name={"degree"}
                        handleInput={handleInput}
                        options={degreeOptions}
                        index={index}
                        id={id}
                      />
                      <small style={{ color: "red" }}>{degreeErr}</small>
                    </div>
                    <div>
                      <DisplaySelect
                        label={"Designation"}
                        value={designation}
                        name={"designation"}
                        handleInput={handleInput}
                        options={designationOptions}
                        index={index}
                        id={id}
                      />
                    </div>
                    <SaveButton
                      type="submit"
                      onClick={(e) => handleSubmit(e, index)}>
                      Save <StyledSaveIcon />
                    </SaveButton>
                  </React.Fragment>
                )}

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
};
export default EducationInfoForm;
