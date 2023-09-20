import React from "react";

function NotInternet() {
  return (
    <div style={{ color: "red", fontSize: "20px", textAlign: "center" }}>
      <p>Internet connection not found, please try again later.</p>
    </div>
  );
}

export default NotInternet;
