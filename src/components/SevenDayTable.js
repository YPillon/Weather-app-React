import React from "react";

import OneDayForecast from "./OneDayForecast";

function SevenDayTable(props) {
  const sevenDayWeather = [];

  if (props.dailyWeather && props.dailyWeather.length > 0) {
    for (let i = 0; i < 7; i++) {
      let date = "";

      if (i === 0) {
        date = "Aujourd'hui";
      } else if (i === 1) {
        date = "Demain";
      } else {
        date = props.dailyWeather[i].dt;
      }

      sevenDayWeather.push({
        date: date,
        maxTemp: Math.round(props.dailyWeather[i].temp.max),
        minTemp: Math.round(props.dailyWeather[i].temp.min),
        weather: props.dailyWeather[i].weather[0].main,
      });
    }
  }

  const sevenDayList = sevenDayWeather.map((dayWeather) => (
    <li key={dayWeather.date} className="oneDayForecast">
      <OneDayForecast weather={dayWeather} />
    </li>
  ));

  return (
    <div className="sevenDayTable">
      <ul>{sevenDayList}</ul>
    </div>
  );
}

export default SevenDayTable;
