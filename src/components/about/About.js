import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about container" id="about">
      <div className="tab">
        <h1 className="heading">Get to know me!</h1>
        <p className="intro">
          Hey! I'm Urvashi Kohale and I'm a{" "}
          <span>FullStack Web Developer </span>
          located in Pune, India. I like to <span>BUILD</span> stuff for web!
        </p>
        <p className="brief">
          Proficient in building, deploying and maintaining web applications
          using <span>modern web technologies</span>, including Javascript,
          React.js, Node.js, Express.js, and MongoDB. Skilled in creating
          responsive & user-friendly web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
