import React, { useState } from "react";
import "./nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navLeft">
        <div className="navName">urvashikohale.</div>
      </div>
      <div className="navRight">
        <div className="navItems">
          <ul className="navMenu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          {/* <div className="hamburger">
            <a href="#">
              <GiHamburgerMenu />
            </a> */}
          {/* <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span> */}
          {/* </div> */}
        </div>
      </div>
    </nav>
  );
};
// const hamburger = document.querySelector(".hamburger");
// const navItems = document.querySelector(".navMenu");

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//   hamburger.classList.toggle("active");
//   navItems.classList.toggle("active")};

export default Nav;
