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
              <p>Lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum</p>
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
              <p>Lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum</p>
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
              <p>Lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
