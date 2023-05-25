import React, { useEffect, useState } from "react";
import useLocation from "../assets/js/customHooks";

import ButtonReturn from "./ButtonReturn";
import InfoBox from "./InfoBox";
import SevenDayTable from "./SevenDayTable";

function SevenDayPage() {
  const [isSouthernCountry, setIsSouthernCountry] = useState(false);
  const weather = useLocation();

  useEffect(() => {
    if (weather.latitude && weather.latitude < 35 && weather.latitude > -35) {
      setIsSouthernCountry(true);
    } else {
      setIsSouthernCountry(false);
    }
  }, [weather.latitude]);

  const handleNoForecast = () => {
    if (weather === "no forecast") {
      return (
        <div className="noForecastAvailable">
          <p>
            Les prévisions sur 7 jours ne sont pas encore disponibles pour cette
            localisation... :/
          </p>
        </div>
      );
    } else {
      return (
        <>
          <SevenDayTable dailyWeather={weather.daily} />
        </>
      );
    }
  };

  return (
    <div className={isSouthernCountry === true ? "app south" : "app north"}>
      <main>
        <ButtonReturn />
        <InfoBox />
        {handleNoForecast()}
      </main>
    </div>
  );
}

export default SevenDayPage;
