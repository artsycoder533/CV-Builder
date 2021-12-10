import "./App.css";
import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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

  //functions
    const generateCV = () => {
      // const copyOfState = { ...this.state };
      // copyOfState.view++;
      // this.setState(copyOfState);
    };

    const nextView = (e) => {
      e.preventDefault();
      // const copyOfState = { ...this.state };
      // copyOfState.view++;
      // this.setState(copyOfState);
    };

    const prevView = (e) => {
      e.preventDefault();
      // const copyOfState = { ...this.state };
      // copyOfState.view--;
      // this.setState(copyOfState);
    };
  
  return (
    <section className="App">
      <Header view={view} />
      <Footer
        className="hide"
        prevView={prevView}
        nextView={nextView}
        view={view}
        generateCV={generateCV}
      />
    </section>
  );
}

export default App;
