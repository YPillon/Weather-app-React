import iconLib from "./iconLib";

const iconBuilder = (icon) => {
  return <iconLib.FontAwesomeIcon icon={icon} className="icon" />;
};

const defineWeatherIcon = (weather, isDaytime) => {
  if (isDaytime === true) {
    if (weather === "Clear") {
      return iconBuilder(iconLib.faSun);
    }
    if (weather === "Clouds") {
      return iconBuilder(iconLib.faCloud);
    }
    if (weather === "Rain" || weather === "Drizzle") {
      return iconBuilder(iconLib.faCloudRain);
    }
    if (weather === "Thunderstorm") {
      return iconBuilder(iconLib.faCloudBolt);
    }
    if (weather === "Snow") {
      return iconBuilder(iconLib.faSnowflake);
    }
    if (weather === "Tornado") {
      return iconBuilder(iconLib.faTornado);
    }
  }
  if (isDaytime === false && weather === "Clear") {
    return iconBuilder(iconLib.faMoon);
  }
  if (isDaytime === false && weather === "Clouds") {
    return iconBuilder(iconLib.faCloudMoon);
  }
  if (isDaytime === false && (weather === "Rain" || weather === "Drizzle")) {
    return iconBuilder(iconLib.faCloudMoonRain);
  } else {
    return iconBuilder(iconLib.faCloud);
  }
};

export { defineWeatherIcon };
