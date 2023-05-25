import React from "react";

import { Link } from "react-router-dom";

import iconLib from "../assets/js/iconLib";

function ButtonReturn() {
  return (
    <div className="btn-return">
      <Link to="/">
        <iconLib.FontAwesomeIcon icon={iconLib.faArrowLeft} />
      </Link>
    </div>
  );
}

export default ButtonReturn;
