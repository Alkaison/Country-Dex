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
      <div className="filter-input" data-aos="fade-right">
        <input
          type="text"
          placeholder="Search for a country ..."
          id="countryNameInput"
          value={userInput}
          onChange={handleUserInput}
          name="Country Name"
          title="Search for a country by name"
        />
        <BiSearchAlt id="searchIcon" title="Search Icon" />
      </div>

      <div className="custom-dropdown" data-aos="fade-left">
        <div className="selected-option" title="Filter by region">
          {regionChoice === "" ? "Filter by Region" : regionChoice}
        </div>
        <ul
          className={`options`}
          onClick={handleRegionChoice}
        >
          <li title="All" value="">All</li>
          <li title="Africa" value="Africa">Africa</li>
          <li title="Americas" value="Americas">Americas</li>
          <li title="Asia" value="Asia">Asia</li>
          <li title="Europe" value="Europe">Europe</li>
          <li title="Oceania" value="Oceania">Oceania</li>
        </ul>
      </div>
    </section>
  );
}

export default Filter;
