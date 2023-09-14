import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import "../Styles/Filter.css";

function Filter() {
  const [userInput, setUserInput] = useState("");
  const [regionChoice, setRegionChoice] = useState("");

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleRegionChoice = (event) => {
    const selectedRegion = event.target;
    const value = selectedRegion.getAttribute("value");
    setRegionChoice(value);
  };

  return (
    <section className="filter-results-container">
      <div className="filter-input">
        <input
          type="text"
          placeholder="Search for a country ..."
          id="countryNameInput"
          value={userInput}
          onChange={handleUserInput}
          name="Country Name"
        />
        <BiSearchAlt id="searchIcon" />
      </div>

      <div className="custom-dropdown">
        <div className="selected-option">
          {regionChoice === "" ? "Filter by Region" : regionChoice}
        </div>
        <ul
          className={`options`}
          onClick={handleRegionChoice}
        >
          <li value="Africa">Africa</li>
          <li value="America">America</li>
          <li value="Asia">Asia</li>
          <li value="Europe">Europe</li>
          <li value="Oceania">Oceania</li>
        </ul>
      </div>
    </section>
  );
}

export default Filter;
