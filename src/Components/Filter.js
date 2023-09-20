import React, { useContext } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { SearchContext } from "../Pages/Home";
import "../Styles/Filter.css";

function Filter() {
  const { userInput, setUserInput, regionChoice, setRegionChoice } =
    useContext(SearchContext);

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
          <li value="">All</li>
          <li value="Africa">Africa</li>
          <li value="Americas">Americas</li>
          <li value="Asia">Asia</li>
          <li value="Europe">Europe</li>
          <li value="Oceania">Oceania</li>
        </ul>
      </div>
    </section>
  );
}

export default Filter;
