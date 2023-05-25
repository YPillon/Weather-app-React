import React, { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar";
import TimeAndPlaceInfo from "./components/TimeAndPlaceInfo";
import WeatherAndTemperature from "./components/WeatherAndTemperature";
import ButtonSevenDays from "./components/ButtonSevenDays";

import { api } from "./assets/js/data";

import "./assets/css/index.css";

function App() {
  const [isSouthernCountry, setIsSouthernCountry] = useState(false);
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");

  const search = (query) => {
    fetch(`${api.base}weather?q=${query}&units=metric&lang=fr&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === "404") {
          setError(result.message);
          setTimeout(() => {
            setError("");
          }, 3000);
        } else {
          setWeather(result);
          setError("");
        }
      });
  };

  const handleSearch = (value) => {
    search(value);
  };

  const defineCurrentLocation = () => {
    if (weather.main) {
      if (weather.name.includes("Arrondissement de")) {
        let temporaryCityName = weather.name.split(" ");

        temporaryCityName.reverse().splice(-2, 2);
        let cityName = temporaryCityName.reverse();
        return `${cityName}, ${weather.sys.country}`;
      } else {
        return `${weather.name}, ${weather.sys.country}`;
      }
    } else {
      return "";
    }
  };

  const defineLocationUrl = () => {
    if (weather.main) {
      return defineCurrentLocation().split(", ")[0].toLowerCase();
    } else return "";
  };

  const defineCountryCodeUrl = () => {
    if (weather.main) {
      return defineCurrentLocation().split(", ")[1].toLowerCase();
    } else return "";
  };

  const currentTemperature = weather.main
    ? `${Math.round(weather.main.temp)}`
    : "";

  const currentWeather = weather.main
    ? {
        weather: weather.weather[0].main,
        sunrise: weather.sys.sunrise,
        sunset: weather.sys.sunset,
      }
    : "";

  useEffect(() => {
    if (weather.coord && weather.coord.lat < 35 && weather.coord.lat > -35) {
      setIsSouthernCountry(true);
    } else {
      setIsSouthernCountry(false);
    }
  }, [weather.coord]);

  return (
    <div className={isSouthernCountry === true ? "app south" : "app north"}>
      <main>
        <SearchBar searchFunction={handleSearch} error={error} />
        {weather.main && (
          <React.Fragment>
            <TimeAndPlaceInfo location={defineCurrentLocation()} />
            <WeatherAndTemperature
              temperature={currentTemperature}
              weather={currentWeather}
            />
            <ButtonSevenDays
              location={defineLocationUrl()}
              countryCode={defineCountryCodeUrl()}
            />
          </React.Fragment>
        )}
        {!weather.main && (
          <div className="welcomeBox">
            <h1 className="welcomeMessage">
              Bienvenue sur Meteolia! <br />
              Entrez le nom de votre ville.
            </h1>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
