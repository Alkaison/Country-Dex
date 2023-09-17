import React from "react";
import { useParams } from "react-router-dom";

function CountryDetails() {
  const { country } = useParams();

  return (
    <div className="country-details">
      <p>Country Details Page - {country}</p>
    </div>
  );
}

export default CountryDetails;
