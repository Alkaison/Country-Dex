import React, { useEffect, useState } from "react";
import Filterdata from "./Filterdata";
import Spinner from "./Spinner";
import "../Styles/Fetch.css";

function Fetch() {
  const [apiData, setApiData] = useState(null);
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
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="main-body-section">
      <div className="main-body-container">
        {loading ? (
          <Spinner />
        ) : (
          <Filterdata apiData={apiData} />
        )}
      </div>
    </section>
  );
}

export default Fetch;
