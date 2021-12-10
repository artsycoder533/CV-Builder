import React, { useState } from "react";
import DisplayInput from '../DisplayInput/DisplayInput';
import { StyledForm } from "../Form/style";
import { Container, EntryWrapper, FormWrapper, GeneralForm } from "./style";
import { StyledTitle } from "../Title/style";
import uniqid from 'uniqid';

const GeneralInfoForm = (props) => {
    
    const handleInput = (e) => { 
        e.preventDefault();
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        //use the spread operator to copy the old values into the state so the new values wont override
        setGeneral({ ...general, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const resetForm = () => {
        const reset = {
          name: "",
          email: "",
          phone: "",
          portfolio: "",
          linkedIn: "",
          github: "",
          id: uniqid(),
        };
    }
    
    const { general, setGeneral } = props;

    const { name, email, phone, portfolio, linkedIn, github, id } = general;
    return (
      <Container>
        <StyledTitle>General Info</StyledTitle>
        <FormWrapper>
          <GeneralForm
            action=""
            onSubmit={handleSubmit}
            className="general__form">
            <EntryWrapper>
              <DisplayInput
                label="Name"
                name="name"
                value={name}
                type="text"
                handleInput={handleInput}
                placeholder="enter name"
              />
              <DisplayInput
                label="Email"
                name="email"
                value={email}
                type="email"
                handleInput={handleInput}
                placeholder="email@email.com"
              />
              <DisplayInput
                label="Phone"
                name="phone"
                value={phone}
                type="tel"
                handleInput={handleInput}
                placeholder="555-555-5555"
              />
              <DisplayInput
                label="Portfolio"
                name="portfolio"
                value={portfolio}
                type="text"
                handleInput={handleInput}
                placeholder="www or http(s)"
              />
              <DisplayInput
                label="LinkedIn"
                name="linkedIn"
                value={linkedIn}
                type="text"
                handleInput={handleInput}
                placeholder="www or http(s)"
              />
              <DisplayInput
                label="Github"
                name="github"
                value={github}
                type="text"
                handleInput={handleInput}
                placeholder="www or http(s)"
              />
            </EntryWrapper>
          </GeneralForm>
        </FormWrapper>
      </Container>
    );
}
export default GeneralInfoForm