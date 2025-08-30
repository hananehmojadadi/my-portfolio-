import React from "react";
import "./Certifications.css";

const certifications = [
  { title: "Graphic Design Graduate", org: "Code to Inspire", tools: "Illustrator, Photoshop, CorelDRAW, Canva", icon: "fa-paint-brush" },
  { title: "Aspire Leaders Program", org: "Harvard-incubated global leadership program on communication and teamwork", icon: "fa-solid fa-users-gear"},
  { title: "Fundamentals of UX/UI Design", org: "Coursera", tools: "Ongoing", icon: "fa-layer-group" },
  { title: "Front-End Developer Program", org: "CodeWeekend", tools: "HTML, CSS, JavaScript, Responsive Design", icon: "fa-code" },
  { title: "Build Websites with Live Data Using APIs", org: "Shcodes", tools: "API Integration, Advanced JavaScript", icon: "fa-plug" },
  { title: "AI and the Future of Work", org: "University of the People", tools: "AI and Workplace Impact", icon: "fa-robot" },
  { title: "Building Diverse and Effective Teams", org: "University of the People", tools: "Team Dynamics, Leadership", icon: "fa-users" },
  { title: "Nobel Learning PBC", org: "Participating in a global youth development program emphasizing leadership and digital skills.", tools: "AI in Business & Healthcare", icon: "fa-solid fa-lightbulb" },
];

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <h2>My <span>Certifications</span></h2>
      <div className="cert-grid">
        {certifications.map((cert, idx) => (
          <div className="cert-card" key={idx}>
            <i className={`fas ${cert.icon} cert-icon`}></i>
            <h3>{cert.title}</h3>
            <p>{cert.org} · {cert.tools}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;