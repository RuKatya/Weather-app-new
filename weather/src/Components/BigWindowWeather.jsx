import React from "react";

const BigWindowWeather = ({ weather }) => {
  return (
    <div className="weatherInfo__bigWindow">
      <h2 className="weatherInfo__bigWindow--desc">
        {weather.weather[0].description}
      </h2>

      <div className="weatherInfo__bigWindow--mainInfo">
        <h2>{weather.name}</h2>
        <h1>{Math.round(weather.main.temp)}&deg;</h1>
        <p>{weather.weather[0].main}</p>
        <img src={`./img/weater-icons/${weather.weather[0].icon}.png`} alt="" />
      </div>

      <div className="weatherInfo__bigWindow--minmaxfillInfo">
        <div>
          <h4>Day</h4>
          <p>{Math.round(weather.main.temp_max)}&deg;</p>
        </div>
        <div>
          <h4>Night</h4>
          <p>{Math.round(weather.main.temp_min)}&deg;</p>
        </div>
        <div>
          <h4>Feels like</h4>
          <p>{Math.round(weather.main.feels_like)}&deg;</p>
        </div>
      </div>
    </div>
  );
};

export default BigWindowWeather;
