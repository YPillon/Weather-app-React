import React from "react";

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
        <h1 className="location">{props.location}</h1>
        <h2 className="date">{dateBuilder(new Date())}</h2>
      </div>
    );
  }

  export default TimeAndPlaceInfo;