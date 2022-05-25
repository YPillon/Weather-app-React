import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import TimeAndPlaceInfo from "./components/TimeAndPlaceInfo";
import WeatherAndTemperature from "./components/WeatherAndTemperature";
import ButtonSevenDays from "./components/ButtonSevenDays";

import "./assets/css/index.css";

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");

  const search = (query) => {
    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === "404") {
          console.log(result);
          setError(result.message);
          console.log(result.message);
          setTimeout(() => {
            setError("");
          }, 3000);
        } else {
          setWeather(result);
          setError("");
          console.log(result);
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

  let locationForUrl = defineCurrentLocation()
    .split(",")[0]
    .toLocaleLowerCase();

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

  const isSouthernCountry = () => {
    if (weather.main && weather.coord.lat < 35 && weather.coord.lat > -35) {
      return "app south";
    } else {
      return "app north";
    }
  };

  return (
    <div className={isSouthernCountry()}>
      <main>
        <SearchBar searchFunction={handleSearch} error={error} />
        {weather.main && (
          <React.Fragment>
            <TimeAndPlaceInfo location={defineCurrentLocation()} />
            <WeatherAndTemperature
              temperature={currentTemperature}
              weather={currentWeather}
            />
            <ButtonSevenDays location={locationForUrl} />
          </React.Fragment>
        )}
        {!weather.main && (
          <h1 className="welcomeMessage">
            Bienvenue sur Meteolia! <br />
            Entrez le nom de votre ville.
          </h1>
        )}
      </main>
    </div>
  );
}

export default App;
