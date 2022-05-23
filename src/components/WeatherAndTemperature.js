import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faSnowflake,
  faMoon,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCloud,
  faCloudRain,
  faCloudBolt,
  faTornado,
  faCloudMoon,
  faCloudMoonRain,
} from "@fortawesome/free-solid-svg-icons";

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

  const defineWeatherIcon = () => {
    if (isDaytime() === true) {
      if (props.weather.weather === "Clear") {
        return <FontAwesomeIcon icon={faSun} className="icon" />;
      }
      if (props.weather.weather === "Clouds") {
        return <FontAwesomeIcon icon={faCloud} className="icon" />;
      }
      if (
        props.weather.weather === "Rain" ||
        props.weather.weather === "Drizzle"
      ) {
        return <FontAwesomeIcon icon={faCloudRain} className="icon" />;
      }
      if (props.weather.weather === "Thunderstorm") {
        return <FontAwesomeIcon icon={faCloudBolt} className="icon" />;
      }
      if (props.weather.weather === "Snow") {
        return <FontAwesomeIcon icon={faSnowflake} className="icon" />;
      }
      if (props.weather.weather === "Tornado") {
        return <FontAwesomeIcon icon={faTornado} className="icon" />;
      }
    }
    if (isDaytime() === false && props.weather.weather === "Clear") {
      return <FontAwesomeIcon icon={faMoon} className="icon" />;
    }
    if (isDaytime() === false && props.weather.weather === "Clouds") {
      return <FontAwesomeIcon icon={faCloudMoon} className="icon" />;
    }
    if (
      isDaytime() === false &&
      (props.weather.weather === "Rain" || props.weather.weather === "Drizzle")
    ) {
      return <FontAwesomeIcon icon={faCloudMoonRain} className="icon" />;
    } else {
      return <FontAwesomeIcon icon={faCloud} className="icon" />;
    }
  };

  return (
    <div className="weather">
      <div>{defineWeatherIcon()}</div>
      <div className="temperature">{props.temperature}°c</div>
    </div>
  );
}

export default WeatherAndTemperature;
