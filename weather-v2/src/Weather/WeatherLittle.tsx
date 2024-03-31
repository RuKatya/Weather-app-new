import { FC } from 'react'
import { IListObject, IWeatherLittle } from '../typescript/intargace'
import { getImageURL } from '../utils/image-util'

const WeatherLittle: FC<IWeatherLittle> = ({ date }) => {
    const getMaxMin = (dateArr: IListObject[]) => {
        const maxTemps = dateArr.map(dt => dt.main.temp_max)
        const minTemps = dateArr.map(dt => dt.main.temp_min)
        const maxTempOfDay = Math.max(...maxTemps).toFixed(0)
        const minTempOfDay = Math.min(...minTemps).toFixed(0)
        return { maxTempOfDay, minTempOfDay }
    }

    const { maxTempOfDay } = getMaxMin(date)
    const { minTempOfDay } = getMaxMin(date)

    return (
        <div className='little-weather'>
            <h4>{date[0].dt_txt.slice(0, 10)}</h4>
            <p>{maxTempOfDay}&deg;/{minTempOfDay}&deg;</p>
            <p>{date[0].weather[0].main}</p>
            <img src={getImageURL(date[0].weather[0].icon, "weater-icons")} alt="" />
        </div>
    )
}

export default WeatherLittle