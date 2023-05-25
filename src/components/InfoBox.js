import React from "react";

import { useParams } from "react-router-dom";

function InfoBox() {
  return (
    <div className="infoBox">
      <h1>
        Prévisions sur <br />7 jours pour
      </h1>
      <h2 className="location">
        {useParams().location}, {useParams().countryCode}
      </h2>
    </div>
  );
}

export default InfoBox;
