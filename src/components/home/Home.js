import React from "react";
import "./home.css";
import Socialicons from "./Socialicons";
import IMG from "../../assets/transparent.png";

const Home = () => {
  return (
    <div className="container home" id="home">
      <div className="homeLeft">
        <div className="homeName">
  <h2 className="hi">Hi there!</h2>

  <h1 className="bigText">
    I'm <span>Urvashi Kohale</span>
  </h1>

  <div className="roleText">Software Engineer</div>

  <p className="subText">
    Software Engineer with industry experience building software applications,
    cloud-based systems, and modern web platforms. Currently pursuing an MS in
    Software Engineering at San Jose State University.
  </p>

  <div className="locationBadge">United States</div>
</div>
        
        <a href="#contact" className="homeButton">
          Contact Me
        </a>

        <Socialicons />
      </div>

      <div className="homeRight">
        <img src={IMG} style={{ width: "30rem" }} alt="profile" />
      </div>
    </div>
  );
};

export default Home;
