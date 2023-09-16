import React from "react";

function CountryCard(props) {
  return (
    <div className="country-card">
      <div className="ctd-img">
        <img src={props.flag} alt={`${props.name} Flag`} />
      </div>

      <div className="ctd-info">
        <p className="ctd-title">{props.name}</p>
        <p className="ctd-desc"><strong>Population: </strong>{props.population}</p>
        <p className="ctd-desc"><strong>Region: </strong>{props.region}</p>
        <p className="ctd-desc"><strong>Capital: </strong>{props.capital}</p>
      </div>
    </div>
  );
}

export default CountryCard;
