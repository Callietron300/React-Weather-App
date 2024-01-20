import WeatherComment from "./WeatherComment.js";

export default function TodayWeather({ weather, date }) {
  return (
    <section className="weather-today mt-sm">
      <h1 className="strong">{weather.city}</h1>
      <h2 className="mt-sm">{date}</h2>
      <h2 className="temp mt-m">
        <span>{weather.temp}</span>
        <span>°</span>
      </h2>
      <div className="row mt-sm">
        <h2 className="strong">
          <WeatherComment condition={weather.condition} temp={weather.temp} />
        </h2>
        <h2 className="strong">
          {weather.tempMax}° - {weather.tempMin}°
        </h2>
      </div>
      <div className="row mt-sm">
        <p>Wind: {weather.wind} km/h</p>
        <p>Humidity: {weather.humidity}%</p>
      </div>
    </section>
  );
}
