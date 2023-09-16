import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import "../Styles/Spinner.css";

function Spinner() {
  return (
    <div className="spinner-loading">
      <InfinitySpin width="200" color="#4fa94d" />
    </div>
  );
}

export default Spinner;
