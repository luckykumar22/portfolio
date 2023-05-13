import React from "react";
import "./about.css";
import MeAbout from "../../assets/bannerImg.png";
import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <br />
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MeAbout} alt="me" />
          </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ Years</small>
              </article>
              {/* <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>Later</small>
              </article> */}
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Project</h5>
                <small>5+ Projects</small>
              </article>
            </div>
            <p>Experienced Full-Stack Developer with 1+ years of industry experience. Proficient in React js, Node.js, HTML, CSS, and JavaScript development. Skilled in both front-end and back-end development, with a proven ability to work effectively in a fast-paced, collaborative environment. Passionate about staying up-to-date with the latest web technologies and best practices. Committed to delivering high-quality, intuitive web experiences for users, from server-side architecture to client-side interfaces. Capable of working on the full software development lifecycle, from ideation and planning to deployment and maintenance.</p>

            <a href="#contact">Let's Talk</a>
          </div>
        
      </div>
    </section>
  );
};

export default About;
