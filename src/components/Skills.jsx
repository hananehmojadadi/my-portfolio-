import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Photoshop", level: 95 },
  { name: "Illustrator", level: 90 },
  { name: "CorelDRAW", level: 85 },
  { name: "Canva", level: 95 },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>My <span>Skills</span></h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;