import "./App.css";
import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

function App() {
  //state variables
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    linkedIn: "",
    github: "",
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
  const [skills, setSkills] = useState([]);
  const [view, setView] = useState(0);
  
  return <div className="App"></div>;
}

export default App;
