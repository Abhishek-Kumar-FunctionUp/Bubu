import React from "react";
import forgive from "./forgive.png";
import "./Forgive.css"; // Import CSS file

export default function Forgive() {
  return (
    <div className="forgive-container">
      <img src={forgive} alt="Forgive" className="forgive-image" />
    </div>
  );
}
