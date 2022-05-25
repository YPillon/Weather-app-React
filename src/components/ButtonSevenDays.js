import React from "react";
import { Link } from "react-router-dom";

function ButtonSevenDays(props) {
  return (
    <Link to={`/sevendays/${props.location}`} className="link">
      <button className="btn">
        Voir les prévisions <br />
        sur 7 jours
      </button>
    </Link>
  );
}

export default ButtonSevenDays;
