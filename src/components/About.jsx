import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2>
        About <span>Me</span>
      </h2>
      <div className="about-content">
        <p>
          Hello! My name is <strong>Hananeh Mojadadi</strong>. I am a passionate 
          <strong> Graphic Designer</strong> and <strong>Front-End Developer </strong> 
          who loves turning creative ideas into digital experiences.  
        </p>
        <p>
          I enjoy designing clean, modern, and user-friendly interfaces that not 
          only look beautiful but also improve usability. Alongside my design 
          skills, I have strong knowledge of web development tools such as 
          <strong> HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,<strong> React</strong> and 
          <strong> Python</strong>, which allow me to bring my designs to life.  
        </p>
        <p>
          My journey in design and development has been fueled by curiosity and 
          creativity. I am constantly learning new skills, keeping up with trends, 
          and exploring innovative ways to solve problems.  
        </p>
        <p>
          Outside of work, I enjoy art, photography, leadership , teamwork and exploring new ideas that 
          inspire my creativity. My goal is to grow as a designer and developer, 
          collaborate with diverse teams, and build products that make a positive 
          impact.  
        </p>
      </div>
    </section>
  );
};

export default About;