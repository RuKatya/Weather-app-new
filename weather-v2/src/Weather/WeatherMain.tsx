import { FC } from 'react'
import { capitalCity, capitalDesc, sunrise, sunset, time, weather } from './weathercont'
import { getImageURL } from '../utils/image-util'

const WeatherMain: FC = () => {
    return (
        <div className='main-weather-window'>
            <div className='main-weather-window__current-info'>
                <h4>Current Weather</h4>
                <p>{time}</p>
                <p>{capitalCity}</p>
                <p>{weather.list[0].dt_txt}</p>
            </div>
            <div className='main-weather-window__current-weather'>
                <img src={getImageURL(weather.list[0].weather[0].icon, "weater-icons")} alt={weather.list[0].weather[0].description} />
                <p className='main-weather-window__current-weather--temp'>{weather.list[0].main.temp.toFixed(0)}&deg;</p>
                <p className='main-weather-window__current-weather--desc'>{capitalDesc}</p>
                <div className='main-weather-window__current-weather--more-info'>
                    <p>{weather.list[0].main.temp_max.toFixed(0)}&deg;/{weather.list[0].main.temp_min.toFixed(0)}&deg;</p>
                    <p>Feels Like: {weather.list[0].main.feels_like.toFixed(0)}&deg;</p>
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
                    <p>{weather.list[0].main.humidity}%</p>
                </div>
                <div className='main-weather-window__additional-info--data'>
                    <img src={getImageURL("clouds", "weater-icons")} alt="humidity" />
                    <p>{weather.list[0].clouds.all}%</p>
                </div>
                <div className='main-weather-window__additional-info--data'>
                    <img src={getImageURL("wind", "weater-icons")} alt="humidity" />
                    <p>{weather.list[0].wind.speed}m/s</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherMain