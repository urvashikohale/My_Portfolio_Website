import React from "react";
import "./home.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Socialicons = () => {
  return (
    <div className="icons">
      <a
        href="https://github.com/urvashikohale"
        className="google-plus"
        target="_blank"
      >
        <i className="homeIcon">
          <FaGithub />
        </i>
      </a>
      <a
        href="https://www.linkedin.com/in/urvashikohale"
        className="linkedin"
        target="_blank"
      >
        <i className="homeIcon">
          <FaLinkedin />
          {/* <BsLinkedin /> */}
        </i>
      </a>
      <a
        href="mailto:kohaleurvashi@gmail.com"
        className="gmail"
        target="_blank"
      >
        <i className="homeIcon" style={{ fontSize: "36px" }}>
          <MdEmail />
        </i>
      </a>
      <a
        href="https://twitter.com/urvashi_kohale"
        className="twitter"
        target="_blank"
      >
        <i className="homeIcon">
          <FaTwitter />
        </i>
      </a>
    </div>
  );
};

export default Socialicons;
