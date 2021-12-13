import React, { useState } from "react";
import DisplayInput from "../DisplayInput/DisplayInput";
import { StyledFormWithScroll } from "../Form/style";
import { Container, EntryWrapper, FormWrapper, StyledError } from "./style";
import { StyledTitle } from "../Title/style";
import { SaveButton, StyledSaveIcon } from "../Button/style";

const GeneralInfoForm = (props) => {
  const [errors, setErrors] = useState({
    nameErr: "",
    phoneErr: "",
    emailErr: "",
    githubErr: "",
    portfolioErr: "",
    linkedInErr: "",
  });

  const validateErrors = () => {
    let nameError,
      phoneError,
      emailError,
      portfolioError,
      githubError,
      linkedInError;
    let isValid = true;
    const { name, phone, email, portfolio, github, linkedIn } = general[0];
    if (name.trim() === "" || name.match(/\d/)) {
      nameError = "Enter a valid name";
      isValid = false;
    }
    if (phone.trim() === "" || !phone.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/)) {
      phoneError = "Phone number must be in the form XXX-XXX-XXXX";
      isValid = false;
    }
    if (email.trim() === "" || !email.includes("@")) {
      emailError = "Enter a valid email";
      isValid = false;
    }

    if (!github.trim().match(/^www\.|^http:|^https:/)) {
      githubError = "Links must start with www, http,or https";
      isValid = false;
    }

    if (!portfolio.trim().match(/^www\.|^http:|^https:/)) {
      portfolioError = "Links must start with www, http,or https";
      isValid = false;
    }

    if (!linkedIn.trim().match(/^www\.|^http:|^https:/)) {
      linkedInError = "Links must start with www, http,or https";
      isValid = false;
    }

    setErrors({
      nameErr: nameError,
      phoneErr: phoneError,
      emailErr: emailError,
      githubErr: githubError,
      portfolioErr: portfolioError,
      linkedInErr: linkedInError,
    });
    return isValid;
  };
  const handleInput = (e) => {
    e.preventDefault();
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    const copyOfGeneral = [...props.general];
    copyOfGeneral[0][name] = value;
    setGeneral([...copyOfGeneral]);

    localStorage.setItem("generalList", JSON.stringify(general));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateErrors();
    isValid ? props.setValid(true) : props.setValid(false);
  };

  const { general, setGeneral } = props;
  const { nameErr, phoneErr, emailErr, portfolioErr, githubErr, linkedInErr } =
    errors;
  const { name, email, phone, portfolio, linkedIn, github } = general;
  return (
    <Container>
      <StyledTitle>General Info</StyledTitle>
      <FormWrapper>
        <StyledFormWithScroll
          action=""
          onSubmit={handleSubmit}
          className="general__form">
          <EntryWrapper>
            <div>
              <DisplayInput
                label="Name"
                name="name"
                value={name}
                type="text"
                handleInput={handleInput}
                placeholder="enter name"
              />
              <StyledError>{nameErr}</StyledError>
            </div>
            <div>
              <DisplayInput
                label="Email"
                name="email"
                value={email}
                type="email"
                handleInput={handleInput}
                placeholder="email@email.com"
              />
              <StyledError>{emailErr}</StyledError>
            </div>
            <div>
              <DisplayInput
                label="Phone"
                name="phone"
                value={phone}
                type="tel"
                handleInput={handleInput}
                placeholder="555-555-5555"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
              <StyledError>{phoneErr}</StyledError>
            </div>
            <div>
              <DisplayInput
                label="Portfolio"
                name="portfolio"
                value={portfolio}
                type="text"
                handleInput={handleInput}
                placeholder="www or http(s)"
              />
              <StyledError>{portfolioErr}</StyledError>
            </div>
            <div>
              <DisplayInput
                label="LinkedIn"
                name="linkedIn"
                value={linkedIn}
                type="text"
                handleInput={handleInput}
                placeholder="www or http(s)"
              />
              <StyledError>{linkedInErr}</StyledError>
            </div>
            <div>
              <DisplayInput
                label="Github"
                name="github"
                value={github}
                type="text"
                handleInput={handleInput}
                placeholder="www or http(s)"
              />
              <StyledError>{githubErr}</StyledError>
            </div>
            <SaveButton type="submit" onClick={handleSubmit}>
              Save <StyledSaveIcon />
            </SaveButton>
          </EntryWrapper>
        </StyledFormWithScroll>
      </FormWrapper>
    </Container>
  );
};
export default GeneralInfoForm;
