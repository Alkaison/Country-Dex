import React, { useEffect, useState, useContext } from "react";
import Filterdata from "./Filterdata";
import NotInternet from "./NotInternet";
import Spinner from "./Spinner";
import { SearchContext } from "../Pages/Home";
import "../Styles/Fetch.css";

function Fetch() {
  const { setApiData, apiError, setApiError } = useContext(SearchContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        return response.json();
      })
      .then((data) => {
        if (isMounted) {
          setApiData(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (isMounted) {
          console.log(`Fetch API Error: ${error}`);
          setApiError(true);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [setApiData, setApiError]);

  return (
    <section className="main-body-section">
      <div className="main-body-container">
        {loading && <Spinner />}
        {!loading && apiError && <NotInternet />}
        {!loading && !apiError && <Filterdata />}
      </div>
    </section>
  );
}

export default Fetch;
