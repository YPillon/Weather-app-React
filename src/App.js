import React from "react";
import "./assets/css/index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="searchBox">
        <input
          type="text"
          placeholder="Rechercher..."
          onChange={this.handleChange}
          className="searchBar"
        />
      </div>
    );
  }
}

function CurrentLocation(props) {
  return <h1 className="location">{props.location}</h1>;
}

function TimeAndPlaceInfo(props) {
  const dateBuilder = (date) => {
    const months = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ];

    const days = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];

    return `${days[date.getDay()]} ${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()}`;
  };

  return (
    <div className="locationBox">
      <CurrentLocation location={props.location} />
      <h2 className="date">{dateBuilder(new Date())}</h2>
    </div>
  );
}

function WeatherAndTemperature(props) {
  return (
    <div className="weather">
      <div>
        <FontAwesomeIcon icon={faSun} className="icon" />
      </div>
      <div className="temperature">22°c</div>
    </div>
  );
}

function ButtonSevenSays(props) {
  return (
    <button className="btn">
      Voir les prévisions <br />
      sur 7 jours
    </button>
  );
}

function App() {
  return (
    <div className="app">
      <main>
        <SearchBar />
        <TimeAndPlaceInfo location="Paris, FR" />
        <WeatherAndTemperature />
        <ButtonSevenSays />
      </main>
    </div>
  );
}

export default App;
