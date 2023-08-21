import React from "react";
import cardBackside from "../images/bg-card-back.png";

function Topsection() {
  return (
    <div className="top-section">
      <div className="card-backside">
        <img src={cardBackside} alt="backsidecard"></img>
        <h5 id="cvvrender" className="card-backside-cvv">
          123
        </h5>
      </div>
    </div>
  );
}
export { Topsection };
