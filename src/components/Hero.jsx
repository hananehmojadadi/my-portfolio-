import React from "react";
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
          <a href="#projects" className="btn primary">View Portfolio</a>
          <a href="#contact" className="btn secondary">Hire Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;