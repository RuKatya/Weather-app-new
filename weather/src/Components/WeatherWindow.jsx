import React from "react";
import BigWindowWeather from "./BigWindowWeather";
import SmallWindowWeather from "./SmallWindowWeather";

const WeatherWindow = ({ weather, theme }) => {
  return (
    <div
      className="weaterMain"
      style={{
        backgroundColor:
          theme === "dark"
            ? "rgba(15, 15, 15, 0.561)"
            : "rgba(226, 226, 226, 0.9)",
        color: theme === "dark" ? "white" : "rgb(49, 49, 49)",
        textShadow:
          theme === "dark"
            ? "0px 0px 10px black"
            : "0px 0px 10px rgb(197, 195, 195)",
      }}
    >
      <div
        className="weatherInfo"
        style={{
          backgroundImage: `url('./img/weater-images/${weather.weather[0].icon}.jpg')`,
        }}
      >
        <BigWindowWeather weather={weather} theme={theme} />
        <SmallWindowWeather weather={weather} theme={theme} />
      </div>
    </div>
  );
};

export default WeatherWindow;
