import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import TodayWeather from "./TodayWeather";
import Forecast from "./Forecast";

export default function Search({ date }) {
  let [city, setCity] = useState("london");
  let [weather, setWeather] = useState("");
  let [forecast, setForecast] = useState("");
  let [loaded, setLoaded] = useState(false);
  const apiKey = "faf1t205ab1o74d732b54981fbc56c80";
  const weatherApiUrl = "https://api.shecodes.io/weather/v1/";

  function updateCity(event) {
    setCity(event.target.value);
  }

  // API Calls
  function starterWeather(cityNow) {
    setLoaded(false);
    const apiUrl = `${weatherApiUrl}current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather);
    getForecast(city);
  }

  function getWeather(event) {
    event.preventDefault();
    setLoaded(false);

    const apiUrl = `${weatherApiUrl}current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather);
  }

  function getForecast(city) {
    const apiUrl = `${weatherApiUrl}forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(addForecast);
  }

  // Update Variables
  function updateWeather(response) {
    setWeather({
      temp: Math.round(response.data.temperature.current),
      city: response.data.city,
      condition: response.data.condition.description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
    });
    getForecast(city);
  }

  function addForecast(response) {
    setWeather((prevWeather) => ({
      ...prevWeather,
      tempMin: Math.round(response.data.daily[0].temperature.maximum),
      tempMax: Math.round(response.data.daily[0].temperature.minimum),
      forecast: response.data.daily,
    }));
    setLoaded(true);
  }

  useEffect(() => {
    starterWeather(city);
  }, []);

  const form = (
    <section className="search mt-sm">
      <form className="form" onSubmit={getWeather}>
        <input
          type="text"
          placeholder="Search"
          className="form-input"
          onChange={updateCity}
        />
        <input type="submit" className="form-submit" />
      </form>
    </section>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <TodayWeather weather={weather} date={date} />
        <Forecast weather={weather} />
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <ReactLoading type="spin" className="loading" />
      </div>
    );
  }
}

//
