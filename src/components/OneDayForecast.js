import React from "react";

import { defineWeatherIcon } from "../assets/js/functions";

function OneDayForecast(props) {
  const weekDayBuilder = (date) => {
    if (date === "Aujourd'hui") {
      return "Aujourd'hui";
    }
    if (date === "Demain") {
      return "Demain";
    }

    const days = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];

    const dayNumber = new Date(date * 1000).getDay();

    const day = days[dayNumber];

    return day;
  };

  return (
    <>
      {props.weather && (
        <>
          <span>{weekDayBuilder(props.weather.date)}</span>
          <span>{defineWeatherIcon(props.weather.weather, true)}</span>
          <span>
            {props.weather.maxTemp}°/{props.weather.minTemp}°
          </span>
        </>
      )}
    </>
  );
}

export default OneDayForecast;
