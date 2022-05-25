import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

function SevenDaysPage() {
  function ButtonReturn() {
    return (
      <div className="btn-return">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </div>
    );
  }

  function InfoBox() {
    return (
      <div className="infoBox">
        <h1>
          Prévisions sur <br />7 jours pour
        </h1>
        <h2 className="location">paris, fr</h2>
      </div>
    );
  }

  function OneDayForecast(props) {
    return (
      <div className="oneDayForecast">
        <span>{props.day}</span>
        <span>
          <FontAwesomeIcon icon={faSun} />
        </span>
        <span>22°/15°</span>
      </div>
    );
  }

  function SevenDayTable() {
    return (
      <div className="sevenDayTable">
        <OneDayForecast day="Aujourd'hui" />
        <OneDayForecast day="Demain" />
        <OneDayForecast day="Vendredi" />
        <OneDayForecast day="Samedi" />
        <OneDayForecast day="Dimanche" />
        <OneDayForecast day="Lundi" />
        <OneDayForecast day="Mardi" />
      </div>
    );
  }

  return (
    <div className="app north">
      <main>
        <ButtonReturn />
        <InfoBox />
        <SevenDayTable />
      </main>
    </div>
  );
}

export default SevenDaysPage;
