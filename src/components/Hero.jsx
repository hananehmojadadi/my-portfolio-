import React from "react";
import { Link } from "react-router-dom"; 
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Hananeh</span>
        </h1>
        <p className="subtitle">
          A passionate <span>Graphic Designer</span> & <span>Frontend Developer</span>
        </p>
        <div className="buttons">
          <a href="#resume" className="btn primary">View Resume</a>
          
          {}
          <Link to="/projects" className="btn secondary">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;