import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div className="container skills" id="skills">
      <div className="skillTab">
        <h1 className="skillHeading">My Skills</h1>
        <div className="allSkills">
          <div className="btn">HTML</div>
          <div className="btn">CSS</div>
          <div className="btn">Javascript</div>
          <div className="btn">ReactJS</div>
          <div className="btn">NodeJS</div>
          <div className="btn">ExpressJS</div>
          <div className="btn">MongoDB</div>
          <div className="btn">Bootstrap</div>
          <div className="btn">MaterialUI</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
