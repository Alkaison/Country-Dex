import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useParams, useNavigate, Link } from "react-router-dom";
import Spinner from "../Components/Spinner";
import "../Styles/CountryDetails.css";

function CountryDetails() {
  // useNavigate to change route/page path
  const navigate = useNavigate();
  const { country } = useParams();
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchNativeNames = (name) => Object.values(name.nativeName).map(language => language.common);
  const fetchCurrencies = (name) => Object.values(name).map(currencies => `${currencies.name} (${currencies.symbol})`);

  useEffect(() => {
    setLoading(true);
    
    let isMounted = true;
    const fetchUrl = country.length === 3 ? `https://restcountries.com/v3.1/alpha/${country}` : `https://restcountries.com/v3.1/name/${country}?fullText=true`;

    fetch(fetchUrl)
      .then((response) => {
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        return response.json();
      })
      .then((data) => {
        if (isMounted) {
          setApiData(data[0]);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (isMounted) {
          console.log(`Fetch API Error: ${error}`);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [country]);

  return (
    <section className="country-details-section">
      <div className="back-btn-container">
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          <IoArrowBack /> Back
        </button>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="countryInfoSection">
          <div className="countryFlag-container">
            <img src={apiData.flags.png} alt={`${apiData.name.common} Flag`} />
          </div>

          <div className="countryStats-container">
            <p className="country-title">{apiData.name.common}</p>

            <div className="country-details">
              <div>
                <p>
                  <strong>Native Names: </strong>
                  {fetchNativeNames(apiData.name).map((names) => `${names}`).join(", ")}
                </p>
                <p>
                  <strong>Population: </strong>
                  {apiData.population.toLocaleString()}
                </p>
                <p>
                  <strong>Region: </strong>
                  {apiData.region}
                </p>
                <p>
                  <strong>Sub Region: </strong>
                  {apiData.subregion}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {apiData.capital.map((record) => `${record}`).join(", ")}
                </p>
              </div>

              <div>
                <p>
                  <strong>Top Level Domain: </strong>
                  {apiData.tld.map((record) => `${record}`).join(", ")}
                </p>
                <p>
                  <strong>Currencies: </strong>
                  {fetchCurrencies(apiData.currencies).map((record) => `${record}`).join(", ")}
                </p>
                <p>
                  <strong>Languages: </strong>
                  {Object.values(apiData.languages).map((record) => `${record}`).join(", ")}
                </p>
              </div>
            </div>

            <div className="country-border">
              {apiData.borders && <p><strong>Border Countries: </strong></p>}
              {apiData.borders ? apiData.borders.map((record, index) => <Link to={`/${record}`} key={index}><span className="country-border-name">{record}</span></Link>) : <span className="no-countries">There are no neighboring countries sharing a border with it.</span>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CountryDetails;
