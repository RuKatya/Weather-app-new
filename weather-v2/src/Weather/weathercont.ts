// import axios from "axios";
import { IAllDataWeather } from "../typescript/intargace";
import weatherData from "../utils/weatherData.json"

// const getData = async () => {
//     const res = await axios.get("https://api.openweathermap.org/data/2.5/forecast?q=jerusalem&units=metric&appid=47d7b942ea7e702e4bdd7a72a9fc3f75")
//     if (res.status === 200) return res.data
//     return "No Data"
// }

// console.log(await getData())
const today = new Date().toISOString().slice(0, 10);

const getTime = (time: number) => {
    return new Date(time * 1000).toLocaleString("en-US", { year: 'numeric', month: 'numeric', day: 'numeric', minute: "numeric", hour: "numeric", hour12: false })
}

const currentTime = () => {
    return new Date().toLocaleString("en-US", { minute: "numeric", hour: "numeric", hour12: false })
}

const capitalizeFirstLetter = (text: string) => {
    return text.replace(/^\w/, (c) => c.toUpperCase());
}

const getDayAfter = (day: number) => {
    const d = new Date()
    // console.log(d)
    d.setDate(d.getDate() + day)
    return d.toISOString().slice(0, 10)
}

export const weather: IAllDataWeather = weatherData
// export const weather: IAllDataWeather = await getData()
export const todayWeather = weather.list.filter(wth => wth.dt_txt.includes(today))
export const sunrise: string = getTime(weather.city.sunrise).slice(11, 16)
export const sunset: string = getTime(weather.city.sunset).slice(11, 16)
export const time = currentTime()
export const capitalDesc = capitalizeFirstLetter(weather.list[0].weather[0].description)
export const capitalCity = capitalizeFirstLetter(weather.city.name)
export const todayTemp = weather.list.filter(wth => wth.dt_txt.includes(today) || wth.dt_txt.includes(getDayAfter(1)) || wth.dt_txt.includes(getDayAfter(2)))
    .slice(0, 9)
    .map(i => { return { date: i.dt_txt.slice(11, 16), max_temp: i.main.temp_max.toFixed(0), min_temp: i.main.temp_min.toFixed(0) } })

function createVariables() {
    const nextDays = [];
    for (let i = 1; i < 5; i++) {
        nextDays[i - 1] = weather.list.filter(wth => wth.dt_txt.includes(getDayAfter(i)))
    }
    console.log(nextDays)
    return nextDays;
}
console.log(createVariables())

export const nextDates = createVariables()

const secondday = getDayAfter(1)
console.log(secondday)