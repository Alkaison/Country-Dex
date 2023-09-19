import React from "react";
import { Link } from "react-router-dom";

function CountryCard(props) {
  return (
    <Link to={`/${props.name}`}>
      <div className="country-card">
        <div className="ctd-img">
          <img src={props.flag} alt={`${props.name} Flag`} />
        </div>

        <div className="ctd-info">
          <p className="ctd-title">{props.name}</p>
          <p className="ctd-desc">
            <strong>Population: </strong>
            {(props.population).toLocaleString()}
          </p>
          <p className="ctd-desc">
            <strong>Region: </strong>
            {props.region}
          </p>
          <p className="ctd-desc">
            <strong>Capital: </strong>
            {props.capital}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
