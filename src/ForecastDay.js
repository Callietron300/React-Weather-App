import React from "react";

import ForecastComment from "./ForecastComment";

export default function ForecastDay({ forecast }) {
  function day() {
    let date = new Date(forecast.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="weather-row mt-sm">
      <p>{day()}</p>
      <ForecastComment condition={forecast.condition.description} />
      <p>{Math.round(forecast.temperature.day)}°</p>
    </div>
  );
}
