import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import NoData from "./Components/NoData";
import WeatherWindow from "./Components/WeatherWindow";
import { getCity } from "./getCity";
import { getTheme } from "./getTheme";
import "./style/App.scss";

function App() {
  const [data, setData] = useState();
  const [city, setCity] = useState(getCity);
  const [err, setErr] = useState();
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    localStorage.setItem("weather-theme", theme);
    localStorage.setItem("weather-city", city);

    document.body.style.background =
      theme === "dark"
        ? "linear-gradient(55deg, rgb(42, 42, 42) 30%, rgb(19, 19, 19) 100%)"
        : "linear-gradient(55deg, rgba(255, 255, 255, 1) 30%, rgba(113, 113, 113, 1) 100%)";
  }, [theme, city]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=47d7b942ea7e702e4bdd7a72a9fc3f75`
        );

        return setData(data);
      } catch (error) {
        console.log(error.request.status);
        console.log(error.request.statusText);
        // setErr(error.request.statusText);
      }
    })();
  }, [city]);

  console.log(err);
  console.log(data);
  return (
    <div>
      <NavBar setCity={setCity} err={err} setErr={setErr} theme={theme} />

      {data ? (
        <WeatherWindow weather={data} theme={theme} />
      ) : (
        <NoData theme={theme} />
      )}

      <div
        onClick={() => {
          theme === "dark" ? setTheme("light") : setTheme("dark");
        }}
      >
        Theme
      </div>
    </div>
  );
}

export default App;
