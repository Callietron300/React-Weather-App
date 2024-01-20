import React from "react";

export default function WeatherComment({ condition, temp }) {
  condition = condition.toLowerCase();
  if (temp >= 30) {
    return <p>The Floor is lava.</p>;
  } else {
    if (condition === "clear sky") {
      return <p>Not a cloud in sight</p>;
    } else if (
      condition === "few clouds" ||
      condition === "scattered clouds" ||
      condition === "broken clouds" ||
      condition === "overcast clouds"
    ) {
      return <p>Cloudy chic today.</p>;
    } else if (
      condition === "rain" ||
      condition === "shower rain" ||
      condition === "light rain" ||
      condition === "moderate rain"
    ) {
      return <p>Yes. It's raining.</p>;
    } else if (
      condition === "thunderstorm" ||
      condition === "thunderstorm with light rain"
    ) {
      return <p>Find your Storm Buddy</p>;
    } else if (
      condition === "snow" ||
      condition === "light snow" ||
      condition === "heavy snow"
    ) {
      return <p>SNOW!</p>;
    } else if (condition === "mist") {
      return <p>Misty vibes today.</p>;
    } else if (condition === "haze") {
      return <p>Hazey vibes today.</p>;
    } else {
      return <p>{condition}</p>;
    }
  }
}
