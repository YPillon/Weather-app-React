import React from "react";
import { Link } from "react-router-dom";

function ButtonSevenDays(props) {
  return (
    <div className="buttonBox">
      <Link
        to={`/sevendays/${props.location}/${props.countryCode}`}
        className="link"
      >
        <button className="btn">
          Voir les prévisions <br />
          sur 7 jours
        </button>
      </Link>
    </div>
  );
}

export default ButtonSevenDays;
