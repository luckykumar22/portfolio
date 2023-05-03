import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Weather App.png";
import IMG2 from "../../assets/Movie Guide.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Weather App",
    subtitle:"Responsive Weather App using React and CSS. Fetching weather updates using openweatherAPI",
    github: "https://github.com/luckykumar22/weather-app",
    demo: "https://luckyweather.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Movie Guide App",
    subtitle:"Responsive Movie Guide App using JavaScript and CSS. Fetching Movie Details using omdbAPI",
    github: "https://github.com/luckykumar22/Movie-Guide-App",
    demo: "https://movieflicksguide.netlify.app/",
  },
  // {
  //   id: 3,
  //   image: IMG3,
  //   title: "",
  //   github: "",
  //   demo: "",
  // },
  // {
  //   id: 4,
  //   image: IMG3,
  //   title: "",
  //   github: "",
  //   demo: "",
  // },
  // {
  //   id: 5,
  //   image: IMG3,
  //   title: "",
  //   github: "",
  //   demo: "",
  // },
  // {
  //   id: 6,
  //   image: IMG3,
  //   title: "",
  //   github: "",
  //   demo: "",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      { 
        data.map(({id, title,subtitle, image, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <small>{subtitle}</small>
              <br /><br />
              <div className="portfolio__item-CTA">
                <a href={github} className="btn">Github</a>
                <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
            </article>
          )
        })
      }
      </div>
    </section>
  );
};

export default Portfolio;
