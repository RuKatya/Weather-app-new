import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';
import { IAllDataWeather } from './typescript/intargace';

function App() {
  const [city, setCity] = useState<string>("jerusalem")
  const [weatherData, setWeatherData] = useState<IAllDataWeather>();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(""
          // `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=47d7b942ea7e702e4bdd7a72a9fc3f75`
        );

        console.log(data)
        console.log(todatedate(data.list[0].dt))
        return setWeatherData(data);
      } catch (error) {
        console.log(error)
        // console.log(error.request.status);
        // console.log(error.request.statusText);
        // setErr(error.request.statusText);
      }
    })();
  }, [city]);

  const todatedate = (sss: number) => {
    const date = new Date(sss)
    return date
  }

  // useEffect(() => {
  //   todatedate(weatherData.list[0].dt)
  // }, [])
  return (
    <>
      <h2>Weather app</h2>
      {weatherData ?
        <div>
          <p>{weatherData.cod}</p>
          <p>{weatherData.list.map(ttt => (
            <div>
              <p>{ttt.visibility}</p>
              {/* <p>{ttt.main.feels_like}</p> */}
              {/* <p>{() => todatedate(ttt.dt)}</p> */}
            </div>
          ))}</p>
        </div>
        // weatherData.list.map(i => (
        //   <div>{i.clouds}</div>
        // ))
        // <p>{weatherData?.list.map((lll: IListObject) => (
        //   <p>{lll.main}</p>
        // ))}</p>
        :
        <>No data</>}

    </>
  )
}

export default App
