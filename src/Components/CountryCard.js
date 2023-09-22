import React from "react";
import { Link } from "react-router-dom";

function CountryCard(props) {
  return (
    <Link to={`/${props.name}`} title={props.name}>
      <div className="country-card">
        <div className="ctd-img">
          <img src={props.flag} alt={`${props.name} Flag`} />
        </div>

        <div className="ctd-info">
          <p className="ctd-title">{props.name}</p>
          <p className="ctd-desc">
            <strong>Population: </strong>
            {props.population ? (props.population).toLocaleString() : <span>--</span>}
          </p>
          <p className="ctd-desc">
            <strong>Region: </strong>
            {props.region ? props.region : <span>--</span>}
          </p>
          <p className="ctd-desc">
            <strong>Capital: </strong>
            {props.capital ? props.capital : <span>--</span>}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
