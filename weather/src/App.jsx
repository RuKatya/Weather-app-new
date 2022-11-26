import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import NoData from "./Components/NoData";
import WeatherWindow from "./Components/WeatherWindow";
import "./style/App.scss";

function App() {
  const [data, setData] = useState();
  const [city, setCity] = useState("jerusalem");
  const [err, setErr] = useState();

  useEffect(() => {
    (async () => {
      await axios
        .post(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=47d7b942ea7e702e4bdd7a72a9fc3f75`
        )
        .then(({ data }) => {
          if (data.cod === "404") {
            setErr(data.message);
          }

          setData(data);
        });
    })();
  }, [city]);

  return (
    <div>
      <NavBar setCity={setCity} err={err} setErr={setErr} />

      <>{data ? <WeatherWindow weather={data} /> : <NoData />}</>
    </div>
  );
}

export default App;
