import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { api, geoApi } from "./data";

function useLocation() {
  const [weather, setWeather] = useState({});

  const currentLocation = useParams().location;
  const currentCountryCode = useParams().countryCode;

  useEffect(() => {
    const getSevenDayWeather = (lat, lon) => {
      fetch(
        `${api.base}onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,hourly,minutely,alerts&lang=fr&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather({ daily: result.daily, latitude: result.lat });
        });
    };

    const searchCoordinates = () => {
      fetch(
        `${geoApi.base}direct?q=${currentLocation},${currentCountryCode}&appid=${geoApi.key}`
      )
        .then((res) => res.json())
        .then((res) => {
          const result = res[0];
          if (Array.isArray(res) === true && res.length === 0) {
            setWeather("no forecast");
            return;
          }
          getSevenDayWeather(result.lat, result.lon);
        });
    };

    searchCoordinates();
  }, [currentLocation, currentCountryCode]);

  return weather;
}

export default useLocation;
