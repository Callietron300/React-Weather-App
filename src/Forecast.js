import React from "react";
import ForecastDay from "./ForecastDay";

export default function Forecast({ weather }) {
  let forecast = weather?.forecast || [];

  console.log(forecast);

  return (
    <section className="forecast-container mt-m">
      <p>Forecast</p>
      <hr />
      <div>
        {" "}
        {forecast.map(function (forecast, i) {
          if (i < 5) {
            return (
              <div key={i}>
                <ForecastDay forecast={forecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </section>
  );
}
