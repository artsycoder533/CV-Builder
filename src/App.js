import "./App.css";
import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import CV from "./components/CV/CV";
import GeneralInfoForm from "./components/GeneralInfo/GeneralInfoForm";
import EducationInfoForm from "./components/EducationInfo/EducationInfoForm";
import ExperienceInfoForm from "./components/ExperienceInfo/ExperienceInfoForm";
import SkillsInfoForm from "./components/SkillsInfo/SkillsInfoForm";

function App() {
  //state variables
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    linkedIn: "",
    github: "",
    id: uniqid()
  });
  const [education, setEducation] = useState([
    {
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
    },
  ]);
  const [experience, setExperience] = useState([
    {
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      employed: "",
      duties: "",
      id: uniqid(),
    },
  ]);
  const [skills, setSkills] = useState([""]);
  const [view, setView] = useState(0);

  //functions
  const generateCV = () => {
    // const copyOfState = { ...this.state };
    // copyOfState.view++;
    // this.setState(copyOfState);
  };

  const nextView = (e) => {
    e.preventDefault();
    setView(view + 1);
  };

  const prevView = (e) => {
    e.preventDefault();
    setView(view - 1);
  };

  return (
    <section className="App">
      <Header view={view} />
      <ProgressBar view={view} />
      <article>
        {view === 0 ? (
          <GeneralInfoForm general={general} setGeneral={setGeneral}/>
        ) : view === 1 ? (
            <div><EducationInfoForm education={education} setEducation={setEducation}/></div>
        ) : view === 2 ? (
              <div><ExperienceInfoForm experience={experience} setExperience={setExperience}/></div>
        ) : view === 3 ? (
                <div><SkillsInfoForm skills={skills} setSkills={setSkills}/></div>
        ) : (
          <div>
            <CV
              general={general}
              education={education}
              experience={experience}
              skills={skills}
            />
          </div>
        )}
      </article>
      <Footer
        prevView={prevView}
        nextView={nextView}
        view={view}
        generateCV={generateCV}
      />
    </section>
  );
}

export default App;
