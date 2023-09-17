import React from "react";
import Filter from "../Components/Filter";
import Fetch from "../Components/Fetch";

function Home() {
  return (
    <div className="home-page">
      <Filter />
      <Fetch />
    </div>
  );
}

export default Home;
