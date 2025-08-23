import React, { useState, useEffect } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if(theme === "dark") setTheme("light");
    else if(theme === "light") setTheme("ocean");
    else setTheme("dark");
  };

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        Switch Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </button>
    </div>
  );
};

export default ThemeToggle;