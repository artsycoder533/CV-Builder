import React, { useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import {
  FiGithub,
  FiLinkedin,
  FiExternalLink,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import {
  Container,
  StyledTitle,
  StyledSectionTitle,
  JobDate,
  HeaderSection,
  List,
  JobTitle,
  Description,
  StyledHeader,
  StyledPrintIcon,
} from "./style";
import { StyledButton } from "../Button/style";

const CV = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });
    const { general, education, experience, skills } = props;
     const { name, email, phone, portfolio, linkedIn, github } = general;
  return (
    <React.Fragment>
      <StyledButton onClick={handlePrint} className="print__button">
        {" "}
        Print <StyledPrintIcon/>{" "}
      </StyledButton>
      <Container ref={componentRef} className="cv">
        <StyledTitle>{name}</StyledTitle>
        <br />
        <HeaderSection>
          <span>
            <FiPhone /> {phone}
          </span>{" "}
          <span>
            <FiMail /> {email}
          </span>{" "}
          <span>
            <FiExternalLink /> {portfolio}
          </span>{" "}
          <span>
            {" "}
            <FiLinkedin /> {linkedIn}
          </span>{" "}
          <span>
            <FiGithub /> {github}
          </span>
        </HeaderSection>
        <div className="experience">
          {/* <hr /> */}
          <StyledSectionTitle>Experience</StyledSectionTitle>
          {/* <hr /> */}

          {experience.map((exp) => {
            const { title, company, startDate, endDate, employed, duties, id } =
              exp;
            console.log(startDate);
            return (
              <React.Fragment key={id}>
                <JobTitle>{title}</JobTitle>
                <JobDate>
                  <span>{company}</span>

                  {employed === true ? (
                    <span>{startDate} - Present</span>
                  ) : (
                    <span>
                      {startDate} - {endDate}
                    </span>
                  )}
                </JobDate>
                <Description>{duties}</Description>
                <br />
              </React.Fragment>
            );
          })}
        </div>
        <div className="education">
          {/* <hr /> */}
          <StyledSectionTitle>Education</StyledSectionTitle>
          {/* <hr /> */}
          {education.map((ed) => {
            const {
              school,
              major,
              minor,
              attending,
              graduate,
              degree,
              gpa,
              startDate,
              designation,
              endDate,
              id,
            } = ed;
            return (
              <React.Fragment key={id}>
                <JobTitle>{school}</JobTitle>
                {graduate === "Yes" ? (
                  <JobDate>
                    <span>
                      {degree} of {designation} in {major}{" "}
                      {minor ? <span>, Minor in {minor}</span> : ""}
                    </span>{" "}
                    <span>Graduated {endDate}</span>{" "}
                  </JobDate>
                ) : attending === true ? (
                  <React.Fragment>
                    <JobDate>
                      <span>
                        {degree} of {designation} in {major}
                        {minor ? <span>, Minor in {minor}</span> : ""}
                      </span>
                      <span>{startDate} - Present</span>
                    </JobDate>
                    {gpa ? <p>Current GPA: {gpa}</p> : attending === true("")}
                  </React.Fragment>
                ) : (
                  <JobDate>
                    <span>
                      Completed coursework in {major}
                      {minor ? <span>, and {minor}</span> : ""}
                    </span>
                    <span>
                      {startDate} - {endDate}
                    </span>
                  </JobDate>
                )}
                <br />
              </React.Fragment>
            );
          })}
        </div>
        <div className="skills">
          <StyledSectionTitle>Skills</StyledSectionTitle>
          <List>
            {skills.map((skill) => {
              return (
                <React.Fragment>
                  <li> {skill.toUpperCase()} </li>
                </React.Fragment>
              );
            })}
          </List>
        </div>
      </Container>
    </React.Fragment>
  );
};
export default CV;