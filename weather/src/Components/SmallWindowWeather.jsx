import React from "react";

const SmallWindowWeather = ({ weather }) => {
  return (
    <div className="weatherInfo__smallWindow">
      <div>
        <h4>Humidity:</h4>
        <p>{weather.main.humidity}%</p>
      </div>
      <div>
        <h4>Clouds:</h4>
        <p> {weather.clouds.all}%</p>
      </div>
      <div>
        <h4>Wind speed:</h4>
        <p> {weather.wind.speed} m/s</p>
      </div>
      <div>
        <h4>Wind gust:</h4>
        <p> {weather.wind.gust} m/s</p>
      </div>
    </div>
  );
};

export default SmallWindowWeather;

/*
 <div className="weaterGrid__side">
          
          </div>
        </div>
      </div> 

*/
