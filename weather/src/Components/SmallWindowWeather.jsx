import React from "react";

const SmallWindowWeather = ({ weather, theme }) => {
  return (
    <div
      className="weatherInfo__smallWindow"
      style={{
        backgroundColor:
          theme === "dark"
            ? "rgba(50, 50, 50, 0.7)"
            : "rgba(210, 209, 209, 0.7)",
      }}
    >
      <div>
        <h4>Humidity:</h4>
        <p>
          {!weather.main.humidity ? "No data" : <>{weather.main.humidity}%</>}
        </p>
      </div>
      <div>
        <h4>Clouds:</h4>
        <p> {!weather.clouds.all ? "No data" : <>{weather.clouds.all}%</>}</p>
      </div>
      <div>
        <h4>Wind speed:</h4>
        <p> {!weather.wind.speed ? "No data" : <>{weather.wind.speed}m/s</>}</p>
      </div>
      <div>
        <h4>Wind gust:</h4>
        <p> {!weather.wind.gust ? "No data" : <>{weather.wind.gust}m/s</>}</p>
      </div>
    </div>
  );
};

export default SmallWindowWeather;
