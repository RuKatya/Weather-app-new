import ChartToday from './Weather/ChartToday'
import SearchWeather from './Weather/SearchWeather'
import WeatherLittle from './Weather/WeatherLittle'
import WeatherMain from './Weather/WeatherMain'
import { nextDates } from './Weather/weathercont'

function App() {
  return (
    <main className='main-weather'>
      <SearchWeather />
      <div className='main-weather__grid'>
        <WeatherMain />
        <ChartToday />
        <div className='main-weather__grid--nextDays'>
          {nextDates.map((nday, index) => (
            < WeatherLittle key={index} date={nday} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App