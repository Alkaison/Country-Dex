import React from "react";
import CountryCard from "./CountryCard";

function Filterdata({ apiData }) {
  return (
    apiData.map((country, index) => (
        <CountryCard
          key={index}
          flag={country.flags.png}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
    ))
  );
}

export default Filterdata;
