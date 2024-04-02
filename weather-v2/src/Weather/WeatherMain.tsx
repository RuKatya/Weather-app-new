import { FC } from 'react'
import { getImageURL } from '../utils/image-util'
import { IWeatherMain } from '../typescript/intargace'
import { capitalizeFirstLetter, currentTime, getTime } from './weathercont'

const WeatherMain: FC<IWeatherMain> = ({ weather }) => {
    const todayWeather = weather.list[0]
    const time = currentTime()
    const capitalCity = capitalizeFirstLetter(weather.city.name)
    const updateTime: string = todayWeather.dt_txt.slice(10, 16)
    const capitalDesc = capitalizeFirstLetter(todayWeather.weather[0].description)
    const sunrise: string = getTime(weather.city.sunrise).slice(10, 16)
    const sunset: string = getTime(weather.city.sunset).slice(10, 16)

    return (
        <div className='main-weather-window'>
            <div className='main-weather-window__top-window'>
                <div className='main-weather-window__current-info'>
                    <h4>Current Weather</h4>
                    <p>{capitalCity}</p>
                    <p>Last Update: {updateTime}</p>
                    <p>{time}</p>
                </div>
                <div className='main-weather-window__current-weather'>
                    <img src={getImageURL(todayWeather.weather[0].icon, "weater-icons")} alt={todayWeather.weather[0].description} />
                    <p className='main-weather-window__current-weather--temp'>{todayWeather.main.temp.toFixed(0)}&deg;</p>
                    <p className='main-weather-window__current-weather--desc'>{capitalDesc}</p>
                    <div className='main-weather-window__current-weather--more-info'>
                        <p>{todayWeather.main.temp_max.toFixed(0)}&deg;/{todayWeather.main.temp_min.toFixed(0)}&deg;</p>
                        <p>Feels Like: {todayWeather.main.feels_like.toFixed(0)}&deg;</p>
                    </div>
                </div>
            </div>
            <div className='main-weather-window__additional-info'>
                <div className='main-weather-window__additional-info--sunsets'>
                    <div className='main-weather-window__additional-info--data'>
                        <img src={getImageURL("sunrise", "sun-icons")} alt="sunrise" />
                        <p>{sunrise}</p>
                    </div>
                    <div className='main-weather-window__additional-info--data'>
                        <img src={getImageURL("sunset", "sun-icons")} alt="sunset" />
                        <p>{sunset}</p>
                    </div>
                </div>
                <div className='main-weather-window__additional-info--data'>
                    <img src={getImageURL("humidity", "weater-icons")} alt="humidity" />
                    <p>{todayWeather.main.humidity}%</p>
                </div>
                <div className='main-weather-window__additional-info--data'>
                    <img src={getImageURL("clouds", "weater-icons")} alt="humidity" />
                    <p>{todayWeather.clouds.all}%</p>
                </div>
                <div className='main-weather-window__additional-info--data'>
                    <img src={getImageURL("wind", "weater-icons")} alt="humidity" />
                    <p>{todayWeather.wind.speed}m/s</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherMain