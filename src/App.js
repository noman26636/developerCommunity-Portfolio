
import React from "react";
import Header from "./components/Header";
import "./App.css"
import ProjectContainer from "./components/ProjectContainer";
import SkillContainer from "./components/SkillContainer";
import TopContainer from "./components/TopContainer";
import ExperienceContainer from "./components/ExperienceContainer";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <TopContainer />
      <SkillContainer />
      <ProjectContainer/>
      <ExperienceContainer/>
      <Contact/>
    </div>
  );
}

export default App;
