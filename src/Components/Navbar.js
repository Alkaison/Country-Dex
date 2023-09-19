import React, { useState, useEffect } from "react";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";
import "../Styles/Navbar.css";

function Navbar() {
  const [theme, setTheme] = useState("dark");

  const updateTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    const AppContainer = document.querySelector(".App");
    localStorage.setItem("theme", newTheme);
    AppContainer.className = `App ${newTheme === "light" ? "lightMode" : "darkMode"}`;
  };

  useEffect(() => {
    const getTheme = localStorage.getItem("theme");

    if (getTheme === null || getTheme === "")
      localStorage.setItem("theme", "dark");
    else
      setTheme(getTheme);
    
    const appContainer = document.querySelector(".App");
    appContainer.className = `App ${getTheme === "light" ? "lightMode" : "darkMode"}`;
  }, []);

  return (
    <nav className="navbar-section">
      <h1 className="navbar-title">Where in the world?</h1>
      <button className="navbar-btn" type="button" onClick={updateTheme}>
        {theme === "dark" ? <BsFillMoonFill /> : <BsMoon />} {theme === "dark" ? "Dark" : "Light"} Mode
      </button>
    </nav>
  );
}

export default Navbar;
