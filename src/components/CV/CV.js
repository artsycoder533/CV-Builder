import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
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
  StyledPrintIcon,
  PrintButton,
  Wrapper,
} from "./style";
import uniqid from "uniqid";

const CV = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const { general, education, experience, skills } = props;
  const { name, email, phone, portfolio, linkedIn, github } = general[0];
  return (
    <Wrapper>
      <PrintButton onClick={handlePrint}>
        {" "}
        Print <StyledPrintIcon />{" "}
      </PrintButton>
      <Container ref={componentRef}>
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
        <div>
          <StyledSectionTitle>Experience</StyledSectionTitle>

          {experience.map((exp) => {
            const { title, company, startDate, endDate, employed, duties, id } =
              exp;
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
        <div>
          <StyledSectionTitle>Education</StyledSectionTitle>
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
        <div>
          <StyledSectionTitle>Skills</StyledSectionTitle>
          <List>
            {skills.map((skill) => {
              return (
                <React.Fragment key={uniqid()}>
                  <li> {skill.toUpperCase()} </li>
                </React.Fragment>
              );
            })}
          </List>
        </div>
      </Container>
    </Wrapper>
  );
};
export default CV;
