import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Hananeh</div>
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
        </li>
        <li>
          <NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
        </li>
        <li>
          <NavLink to="/experience" onClick={() => setIsOpen(false)}>Experience</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;