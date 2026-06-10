import React from "react";
import "./home.css";
import Socialicons from "./Socialicons";
import IMG from "../../assets/transparent.png";

const Home = () => {
  return (
    <div className="container home" id="home">
      <div className="homeLeft">
        <div className="homeName">
          <div className="hi">Hi there 👋</div>

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

          <div className="availabilityBadge">
            Available for 2026 SWE roles
          </div>
        </div>

        <a href="#contact" className="homeButton">
          Contact Me
        </a>

        <Socialicons />
      </div>

      <div className="homeRight">
        <img src={IMG} alt="profile" />
      </div>
    </div>
  );
};

export default Home;
