import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <br />
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>MERN Stack Development</h3>
          </div>
          <ul className="service__list">
          <li>
              <BiCheck className='service__list-icon'/>
              <p>A Full-stack MERN developer with over 1+ years of experience building full-stack web applications. I have a passion for creating high-quality, efficient and scalable web applications.</p>
            </li>
          </ul>
        </article>
        {/* END OF SERVICE 1 */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
          <li>
              <BiCheck className='service__list-icon'/>
              <p>A Frontend developer with a passion to create high-quality, user-friendly, interactive and intuitive web applications. Skilled in HTML, CSS, JavaScript, jQuery, AJAX, React, Redux, Bootstrap.</p>
            </li>
          </ul>
        </article>
      {/* END OF SERVICE2 */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
          <li>
              <BiCheck className='service__list-icon'/>
              <p>A Node.js backend developer with extensive knowledge in developing and maintaining web applications, REST APIs, databases, server management, Express, MongoDB, and AWS.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
