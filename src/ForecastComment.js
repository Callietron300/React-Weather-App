import React from "react";

export default function ForecastComment({ condition }) {
  condition = condition.toLowerCase();
  if (condition === "clear sky" || condition === "sky is clear") {
    return (
      <div className="row-tight">
        <i className="fa-solid fa-sun ml-sm"></i>
        <p>Clear</p>
      </div>
    );
  } else if (
    condition === "few clouds" ||
    condition === "scattered clouds" ||
    condition === "broken clouds" ||
    condition === "overcast clouds"
  ) {
    return (
      <div className="row-tight">
        <i className="fa-solid fa-cloud ml-sm"></i>
        <p>Cloudy</p>
      </div>
    );
  } else if (
    condition === "rain" ||
    condition === "shower rain" ||
    condition === "light rain"
  ) {
    return (
      <div className="row-tight">
        <i className="fa-solid fa-cloud-rain ml-sm"></i>
        <p>Rain</p>
      </div>
    );
  } else if (
    condition === "moderate rain" ||
    condition === "heavy intensity rain"
  ) {
    return (
      <div className="row-tight">
        <i className="fa-solid fa-cloud-showers-heavy ml-sm"></i>
        <p>Heavy Rain</p>
      </div>
    );
  } else if (
    condition === "thunderstorm" ||
    condition === "thunderstorm with light rain ml-sm"
  ) {
    return (
      <div className="row-tight">
        <i className="fa-solid fa-cloud-bolt ml-sm"></i>
        <p>Thunder</p>
      </div>
    );
  } else if (
    condition === "snow" ||
    condition === "light snow" ||
    condition === "heavy snow" ||
    condition === "rain and snow"
  ) {
    return (
      <div className="row-tight">
        <i className="fa-solid fa-snowflake ml-sm"></i>
        <p>Snow</p>
      </div>
    );
  } else if (condition === "mist") {
    return (
      <div className="row-tight">
        <i className="fa-solid fa-wind ml-sm"></i>
        <p>Mist</p>
      </div>
    );
  } else if (condition === "haze") {
    return (
      <div className="row-tight">
        <i className="fa-solid fa-wind ml-sm"></i>
        <p>Haze</p>
      </div>
    );
  } else {
    return <p>{condition}</p>;
  }
}
