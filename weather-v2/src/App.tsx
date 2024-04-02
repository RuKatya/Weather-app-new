import { useEffect, useState } from 'react'
import { IAllDataWeather } from './typescript/intargace'
import axios from 'axios'
import SearchWeather from './Weather/SearchWeather'
import WeatherMain from './Weather/WeatherMain'
import { getCity } from './utils/getCity'
import ChartToday from './Weather/ChartToday'
import { createVariables } from './Weather/weathercont'
import WeatherLittle from './Weather/WeatherLittle'
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const [weather, setWeather] = useState<IAllDataWeather>()
  const [city, setCity] = useState(getCity)
  const [loading, setLoading] = useState(false)

  const getData = async (city: string) => {
    try {
      setLoading(true)
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=47d7b942ea7e702e4bdd7a72a9fc3f75`)
      console.log(data)
      return setWeather(data)
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData(city)
  }, [city])


  const nextDates = weather ? createVariables(weather) : []

  return (
    <main className={`main-weather ${loading ?
      "main-weather__loading"
      :
      "main-weather__main"
      }`}>
      {loading ? <>
        <h2>Loading</h2>
        <CircularProgress color="inherit" />
      </>
        : <> {weather ? <>
          <SearchWeather setCity={setCity} />
          <div className='main-weather__grid'>
            <WeatherMain weather={weather} />
            <ChartToday weather={weather} />
            <div className='main-weather__grid--nextDays'>
              {nextDates.map((nday, index) => (
                < WeatherLittle key={index} date={nday} />
              ))}
            </div>
          </div>
        </> :
          <div className='main-weather__loading'>
            <h1>
              NO DATA
            </h1>
            <button onClick={() => {
              localStorage.clear()
              window.location.reload();
            }}>Refresh</button>
          </div>
        }
        </>}
    </main>
  )
}

export default App