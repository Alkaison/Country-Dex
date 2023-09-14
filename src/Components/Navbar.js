import React, { useState } from "react";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";
import "../Styles/Navbar.css";

function Navbar() {
  const [theme, setTheme] = useState("dark");

  const updateTheme = () => {
    const appContainer = document.querySelector(".App");
    appContainer.classList.toggle("lightMode");
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
