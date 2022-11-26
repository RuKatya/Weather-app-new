import React from "react";
import BigWindowWeather from "./BigWindowWeather";
import SmallWindowWeather from "./SmallWindowWeather";

const WeatherWindow = ({ weather }) => {
  return (
    <div className="weaterMain">
      <div
        className="weatherInfo"
        style={{
          backgroundImage: `url('./img/weater-images/${weather.weather[0].icon}.jpg')`,
        }}
      >
        <BigWindowWeather weather={weather} />

        <SmallWindowWeather weather={weather} />
      </div>
    </div>
  );
};

export default WeatherWindow;
