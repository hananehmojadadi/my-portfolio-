import React from "react";
import "./Experience.css";

const experiences = [
  { 
    title: "Graphics Designer", 
    org: "FEFA Online Academy", 
    date: "Apr 2025 – Jul 2025", 
    desc: "Designed posters, banners, logos, and social media graphics for educational and nonprofit organizations. Developed skills in layout, color theory, and digital tools. Collaborated with the team to produce engaging content for various platforms.", 
    icon: "fa-paint-brush" 
  },
  { 
    title: "Data Entry Clerk", 
    org: "Three Percent Pakistan – Islamabad", 
    date: "Dec 2024 – Feb 2025", 
    desc: "Entered and managed company data accurately. Maintained database integrity and assisted with report generation.", 
    icon: "fa-database" 
  },
  { 
    title: "Interpreter (Volunteer)", 
    org: "Various Events", 
    date: "Apr 2024 – Jun 2024", 
    desc: "Provided language interpretation to ensure clear communication during events.", 
    icon: "fa-headset" 
  },
  { 
    title: "Instructor", 
    org: "The Bloom School System – Islamabad, Pakistan", 
    date: "Apr 2024 – Oct 2024", 
    desc: "Conducted educational sessions and supported students academically. Organized programs and earned certification for program coordination.", 
    icon: "fa-chalkboard-teacher" 
  },
  { 
    title: "English Teacher", 
    org: "Ajazunor Academy – Herat, Afghanistan", 
    date: "Apr 2022 – Jul 2022", 
    desc: "Delivered tailored English lessons and developed lesson plans to improve student language skills.", 
    icon: "fa-language" 
  },
  { 
    title: "English Language Trainee", 
    org: "Erteqa English Language & TOEFL Academy – Herat, Afghanistan", 
    date: "Oct 2020 – Dec 2020", 
    desc: "Completed training in English language and TOEFL preparation.", 
    icon: "fa-book-open" 
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2>My <span>Experience</span></h2>
      <div className="exp-grid">
        {experiences.map((exp, idx) => (
          <div className="exp-card" key={idx}>
            <div className="exp-icon-wrap">
              <i className={`fas ${exp.icon} exp-icon`}></i>
            </div>
            <h3>{exp.title}</h3>
            <p className="exp-org">{exp.org}</p>
            <p className="exp-date">{exp.date}</p>
            <p className="exp-desc">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;