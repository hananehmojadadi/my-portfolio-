import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       <div className="footer-about">
  <h3>About Me</h3>
  <p>
    I am a passionate Frontend Developer<br />
    Designer creating interactive experiences.<br />
    I build responsive and user friendly websites <br />
  </p>
</div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#certifications">Certificates</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/hananeh-mojadadi-455b44344" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/hana.vex" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://x.com/HananehM35240" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        © 2025 Hananeh Mojadadi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;