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
  const [general, setGeneral] = useState(JSON.parse(localStorage.getItem("generalList")) || [{
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    linkedIn: "",
    github: "",
    id: uniqid()
  }]);
  const [education, setEducation] = useState(JSON.parse(localStorage.getItem("educationList")) || [
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
  const [experience, setExperience] = useState(JSON.parse(localStorage.getItem("experienceList")) || [
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
  const [view, setView] = useState(Number(localStorage.getItem("view")) || 0);
  const [valid, setValid] = useState(localStorage.getItem("valid") || false);

  useEffect(() => {
    localStorage.setItem("educationList", JSON.stringify(education));
  }, [education]);
  useEffect(() => {
    localStorage.setItem("experienceList", JSON.stringify(experience));
  }, [experience]);
  useEffect(() => {
    localStorage.setItem("generalList", JSON.stringify(general));
  }, [general]);
  useEffect(() => {
    localStorage.setItem("skillList", JSON.stringify(skills));
  }, [skills]);
  useEffect(() => {
    console.log("valid changed");
  localStorage.setItem("valid", valid);
});
  useEffect(() => {
    localStorage.setItem("view", view);
  });

  //functions
  const generateCV = () => {
    setView(Number(view) + 1);
  };

  const nextView = (e) => {
    e.preventDefault();
    if (view === 4) return;
    setView(Number(view) + 1);
    setValid(false);
  };

  const prevView = (e) => {
    e.preventDefault();
    if (view === 0) return;
    setView(Number(view) - 1);
  };

  return (
    <section className="App">
      {view > 3 ? "" : <Header view={view} />}
      {view > 3 ? "" : <ProgressBar view={view} />}
      <article>
        {view === 0 ? (
          <GeneralInfoForm general={general} setGeneral={setGeneral} setValid={setValid}/>
        ) : view === 1 ? (
            <div><EducationInfoForm education={education} setEducation={setEducation} setValid={setValid}/></div>
        ) : view === 2 ? (
              <div><ExperienceInfoForm experience={experience} setExperience={setExperience} setValid={setValid}/></div>
        ) : view === 3 ? (
                <div><SkillsInfoForm skills={skills} setSkills={setSkills} setValid={setValid}/></div>
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
        valid={valid}
      />
    </section>
  );
}

export default App;
