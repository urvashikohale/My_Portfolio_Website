import React from "react";
import "./projects.css";
import Img1 from "../../assets/one.jpg";

const Projects = () => {
  return (
    <div className="container projects" id="projects">
      <div className="projTab">
        <div className="projHeading">
          <h1>Recent Work</h1>
        </div>
        <div className="projCards">
          <article className="projCard">
            <div className="projImage">
              <img src={Img1} alt="image1" />
            </div>
            <h3>E-Commerce Website</h3>
            <div className="projLink">
              <a href="" className="" target="_blank">
                Code
              </a>
              <a href="" className="" target="_blank">
                Demo
              </a>
            </div>
          </article>
          <article className="projCard">
            <div className="projImage">
              <img src={Img1} alt="image1" />
            </div>
            <h3>SocialBook</h3>
            <div className="projLink">
              <a href="" className="" target="_blank">
                Code
              </a>
              <a href="" className="" target="_blank">
                Demo
              </a>
            </div>
          </article>
          <article className="projCard">
            <div className="projImage">
              <img src={Img1} alt="image1" />
            </div>
            <h3>Portfolio Website</h3>
            <div className="projLink">
              <a href="" className="" target="_blank">
                Code
              </a>
              <a href="" className="" target="_blank">
                Demo
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Projects;
