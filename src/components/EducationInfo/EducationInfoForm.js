import React, { useState } from "react";
import DisplayInput from "../DisplayInput/DisplayInput";
import DisplayRadio from "../DisplayRadio/DisplayRadio";
import DisplayCheckbox from "../DisplayCheckbox/DisplayCheckbox";
import DisplaySelect from "../DisplaySelect/DisplaySelect";
import {
  AbsoluteIconButton,
  AbsoluteTrashButton,
  SaveButton,
  StyledSaveIcon,
  StyledTrashIcon,
} from "../Button/style";
import uniqid from "uniqid";
import {
  Container,
  EntryWrapper,
  StyledAddIcon,
  FormWrapper,
  StyledError,
} from "./style";
import { StyledFormWithScroll } from "../Form/style";
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

  const [currentEntry, setCurrentEntry] = useState(0);

  const [errors, setErrors] = useState({
    schoolErr: "",
    majorErr: "",
    dateStartedErr: "",
    degreeErr: "",
    designationErr: "",
  });

  const handleSubmit = (e, index) => {
    e.preventDefault();
    const isValid = validateErrors(index);
    isValid ? props.setValid(true) : props.setValid(false);
    setCurrentEntry(index);
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

    type === "radio" ? (entry["graduate"] = value) : (entry["graduate"] = "");
    props.setEducation([...copyOfEducation]);
  };

  const deleteEntry = (index) => {
    const copyOfState = [...props.education];
    copyOfState.splice(index, 1);
    props.setEducation(copyOfState);
  };

  const addNewEntry = () => {
    const copyOfState = [...props.education];
    copyOfState.push({
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
    props.setValid(false);
  };

  const validateErrors = (index) => {
    let schoolError,
      graduateError,
      majorError,
      startDateError,
      endDateError,
      degreeError;
    let isValid = true;
    const { school, major, startDate, endDate, degree, attending, graduate } =
      education[index];
    if (school.trim() === "" || school.match(/\d/)) {
      schoolError = "School name must not be empty";
      isValid = false;
    }
    if (major.trim() === "" || major.match(/\d/)) {
      majorError = "Major/course of study must not be empty";
      isValid = false;
    }
    if (startDate === "") {
      startDateError = "Must select a start date";
      isValid = false;
    }
    if (attending === "") {
      if (endDate === "") {
        endDateError = "Must select an end date";
        isValid = false;
      }
      if (graduate === "") {
        graduateError = "Must choose graduation status";
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
      degreeErr: degreeError,
      graduateErr: graduateError,
    });
    return isValid;
  };

  const { education, valid } = props;
  const {
    schoolErr,
    majorErr,
    startDateErr,
    endDateErr,
    degreeErr,
    graduateErr,
  } = errors;
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
                  {currentEntry === index ? (
                    <StyledError>{schoolErr}</StyledError>
                  ) : (
                    ""
                  )}
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
                  {currentEntry === index ? (
                    <StyledError>{majorErr}</StyledError>
                  ) : (
                    ""
                  )}
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
                  {currentEntry === index ? (
                    <StyledError>{startDateErr}</StyledError>
                  ) : (
                    ""
                  )}
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
                    {currentEntry === index ? (
                      <StyledError>{endDateErr}</StyledError>
                    ) : (
                      ""
                    )}
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
                  <div>
                    <DisplayRadio
                      label="Yes"
                      name={`graduate${index}`}
                      graduate={graduate}
                      // value={graduate}
                      handleInput={handleInput}
                      index={index}
                      id={id}
                    />
                    {currentEntry === index ? (
                      <StyledError>{graduateErr}</StyledError>
                    ) : (
                      ""
                    )}
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
                      {currentEntry === index ? (
                        <StyledError>{degreeErr}</StyledError>
                      ) : (
                        ""
                      )}
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
                  </React.Fragment>
                )}

                {index === 0 ? (
                  <SaveButton
                    type="submit"
                    onClick={(e) => handleSubmit(e, index)}>
                    Save <StyledSaveIcon />
                  </SaveButton>
                ) : (
                  <React.Fragment>
                    <SaveButton
                      type="submit"
                      onClick={(e) => handleSubmit(e, index)}>
                      Save <StyledSaveIcon />
                    </SaveButton>
                    <AbsoluteTrashButton
                      type="button"
                      onClick={() => deleteEntry(index)}
                      aria-label="delete entry button">
                      <StyledTrashIcon />
                    </AbsoluteTrashButton>
                  </React.Fragment>
                )}
              </EntryWrapper>
            );
          })}
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
export default EducationInfoForm;
