import React, { useContext } from "react";
import CountryCard from "./CountryCard";
import { SearchContext } from "../Pages/Home";

function Filterdata() {
  let renderedContent;
  const { userInput, regionChoice, apiData } = useContext(SearchContext);

  if (userInput === "" && regionChoice === "") {
    renderedContent = apiData.map((country, index) => (
      <CountryCard
        key={index}
        flag={country.flags.png}
        name={country.name.common}
        population={country.population}
        region={country.region}
        capital={country.capital}
      />
    ));
  } else if (userInput === "" && regionChoice !== "") {
    renderedContent = apiData
      .filter((country) => country.region === regionChoice)
      .map((country, index) => (
        <CountryCard
          key={index}
          flag={country.flags.png}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ));
  } else if (userInput !== "" && regionChoice === "") {
    renderedContent = apiData
      .filter((country) => (country.name.common).toLowerCase().startsWith(userInput.toLowerCase()))
      .map((country, index) => (
        <CountryCard
          key={index}
          flag={country.flags.png}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ));
  } else if (userInput !== "" && regionChoice !== "") {
    renderedContent = apiData
      .filter(
        (country) =>
        (country.name.common).toLowerCase().startsWith(userInput.toLowerCase()) &&
          country.region === regionChoice
      )
      .map((country, index) => (
        <CountryCard
          key={index}
          flag={country.flags.png}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ));
  }

  if (renderedContent.length === 0) {
    renderedContent = (
      <div
        style={{
          color: "red",
          fontSize: "20px",
          textAlign: "center",
          letterSpacing: "0.7px",
        }}
      >
        <p>
          Not Country found matching your input or filter, please try something
          different.
        </p>
      </div>
    );
  }

  return renderedContent;
}

export default Filterdata;
