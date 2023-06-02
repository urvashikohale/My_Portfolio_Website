import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { HiOutlineMail } from "react-icons/hi";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Socialicons from "../home/Socialicons";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2miycva",
        "template_li0ph41",
        "#myform",
        "MXmLJUl_YBOfK6Nye"
      )
      .then(
        function (response) {
          setDone("Thank you for contacting Me!");
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          setDone("Error! message NOT send!");
          console.log("FAILED...", error);
        }
      );

    e.target.reset();
  };
  // const message = () => {
  //   done ? "Thank you for contacting" : "message not sendddddd";
  // };
  return (
    <div className=" contact" id="contact">
      <div className="contactTab">
        <h3>
          If you're looking for any collaboration, have any queries or want to
          contact me,
        </h3>
        <h1>Get in touch</h1>
        <div className="contactDiv">
          <div className="contactOptions">
            <div className="contactOption">
              <SlLocationPin className="contactIcon" />
              {/* <MdOutlineEmail className="contact__option-icon" /> */}
              <div className="details">
                <h4>Location</h4>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>
            <div className="contactOption">
              <HiOutlineMail className="contactIcon" />
              {/* <MdOutlineEmail className="contact__option-icon" /> */}
              <div className="details">
                <h4>Email</h4>
                <p>kohaleurvashi@gmail.com</p>
                <a href="mailto:urvashikohale64@gmail.com" target="_blank">
                  Send a message
                </a>
              </div>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} id="myform" className="formm">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              type="message"
              name="message"
              row="7"
              placeholder="Your Message"
              required
            />
            <button type="submit" className="contactBtn">
              Send Message
            </button>
            <span className="spann">
              {done && (
                <label
                  style={{
                    color: "Black",
                    fontFamily: "Poppins, sans-serif",
                    letterSpacing: "0.5px",
                    fontWeight: "600",
                  }}
                >
                  {done}
                </label>
              )}
            </span>
          </form>
        </div>
      </div>
      <div className="footer">
        <h3 className="footerName">Let's Connect</h3>
        <div className="socialLinks">
          <a
            href="https://github.com/urvashikohale"
            class="google-plus"
            target="_blank"
          >
            <i className="link">
              <BsGithub />
            </i>
          </a>
          <a
            href="https://www.linkedin.com/in/urvashikohale"
            class="linkedin"
            target="_blank"
          >
            <i className="link">
              <FaLinkedinIn />
            </i>
          </a>
          <a
            href="mailto:kohaleurvashi@gmail.com"
            class="gmail"
            target="_blank"
          >
            <i className="link">
              <SiGmail />
            </i>
          </a>
          <a
            href="https://twitter.com/urvashi_kohale"
            class="twitter"
            target="_blank"
          >
            <i className="link">
              <IoLogoTwitter />
            </i>
          </a>

          <a
            href="https://www.facebook.com/urvashikohale/"
            class="facebook"
            target="_blank"
          >
            <i className="link">
              <CgFacebook />
            </i>
          </a>
        </div>
        <p>Designed & Developed by urvashikohale.</p>
      </div>
    </div>
  );
};

export default Contact;
