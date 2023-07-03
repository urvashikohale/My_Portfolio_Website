import React from "react";
import "./home.css";
import Socialicons from "./Socialicons";
import IMG from "../../assets/transparent.png";

const Home = () => {
  return (
    <div className="container home  " id="home">
      <div className="homeLeft">
        <div className="homeName">
          <h2 className="hi">Hi there!</h2>
          <h1 className="bigText">
            I'm <span>Urvashi Kohale</span>
          </h1>
          <div className="wrapper">
            <div className="staticText">FullStack Web Developer</div>
          </div>
        </div>
        <a href="#contact" className="homeButton">
          Contact Me
        </a>
        <Socialicons />
      </div>
      <div className="homeRight">
        <img src={IMG} style={{ width: "30rem" }} />
      </div>
    </div>
  );
};

export default Home;
