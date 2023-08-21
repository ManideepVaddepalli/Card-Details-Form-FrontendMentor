import React from "react";
import Cardsvg from "../images/card-logo.svg";
import { totalFormData } from "./Bottomsection";

function Cardsection() {
  return (
    <div className="top-card-content">
      <img src={Cardsvg} alt="userincard"></img>
      <h4>
        {totalFormData.cardNumber
          ? totalFormData.cardNumber
          : "0123 4567 8901 2345"}
      </h4>
      <h5>
        {totalFormData.holderName ? totalFormData.holderName : "FELICA LEIRE "}
        <span>
          {totalFormData.expMonth && totalFormData.expYear
            ? `${totalFormData.expMonth}/${totalFormData.expYear}`
            : "09/00"}
        </span>
      </h5>
    </div>
  );
}
export { Cardsection };
