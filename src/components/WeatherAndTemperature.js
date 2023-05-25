import React from "react";

import { defineWeatherIcon } from "../assets/js/functions";

function WeatherAndTemperature(props) {
  const isDaytime = () => {
    const currentTime = Date.now() / 1000;
    if (
      currentTime >= props.weather.sunrise &&
      currentTime <= props.weather.sunset
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="weather">
      <div>
        {isDaytime()
          ? defineWeatherIcon(props.weather.weather, true)
          : defineWeatherIcon(props.weather.weather, false)}
      </div>
      <div className="temperature">{props.temperature}°c</div>
    </div>
  );
}

export default WeatherAndTemperature;
