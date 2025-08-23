import React, { useState } from "react";
import "./Projects.css";

const projects = [
  { 
    name: "Logo Design Collection", 
    tech: "Adobe Illustrator", 
    desc: "Created 5 unique logos for various clients, focusing on brand identity and creativity.", 
    status: "Featured" 
  },
  { 
    name: "Social Media Posters", 
    tech: "Photoshop, Canva", 
    desc: "Designed engaging posters for awareness campaigns and educational initiatives.", 
    status: "Completed" 
  },
  { 
    name: "Creative Portfolio Website", 
    tech: "React, CSS, JavaScript", 
    desc: "Built a personal portfolio website with responsive design and user-focused experience.", 
    status: "Featured" 
  },
  { 
    name: "Beauty Website Design", 
    tech: "HTML, CSS, JavaScript", 
    desc: "Developed a modern, responsive beauty website to showcase products and services.", 
    status: "Completed" 
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter(p => p.tech.includes(filter));

  return (
    <section className="projects" id="projects">
      <h2>My <span>Projects</span></h2>

      <div className="filter-buttons">
        {["All", "Adobe Illustrator", "Photoshop", "React", "HTML", "CSS", "JavaScript"].map(f => (
          <button 
            key={f} 
            className={filter === f ? "active" : ""} 
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filtered.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <h3>{proj.name}</h3>
            <p>{proj.desc}</p>
            <p className="tech">{proj.tech}</p>
            <span className={`status ${proj.status.toLowerCase()}`}>{proj.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;