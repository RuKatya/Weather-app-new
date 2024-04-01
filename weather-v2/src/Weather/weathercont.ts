import axios from "axios";
import { IAllDataWeather } from "../typescript/intargace";

export const getCity = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    const target = ev.target as typeof ev.target & {
        searchCityInput: { value: string };
    };
    const city = target.searchCityInput.value
    localStorage.setItem("city", city)
    return getData(city)
}

const getData = async (city: string) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=47d7b942ea7e702e4bdd7a72a9fc3f75`)
    if (res.status === 200) return res.data
    return "No Data"
}

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
    d.setDate(d.getDate() + day)
    return d.toISOString().slice(0, 10)
}

const createVariables = () => {
    const nextDays = [];
    for (let i = 1; i < 5; i++) {
        nextDays[i - 1] = weather.list.filter(wth => wth.dt_txt.includes(getDayAfter(i)))
    }
    return nextDays;
}

const getLastCity = (): string => {
    if (!localStorage.getItem("city")) {
        localStorage.setItem("city", "jerusalem")
    } else {
        return localStorage.getItem("city")!
    }
    return "jerusalem"
}

export const weather: IAllDataWeather = await getData(getLastCity())
export const todayWeather = weather.list.filter(wth => wth.dt_txt.includes(today))
export const sunrise: string = getTime(weather.city.sunrise).slice(10, 16)
export const sunset: string = getTime(weather.city.sunset).slice(10, 16)
export const updateTime: string = weather.list[0].dt_txt.slice(10, 16)
export const time = currentTime()
export const capitalDesc = capitalizeFirstLetter(weather.list[0].weather[0].description)
export const capitalCity = capitalizeFirstLetter(weather.city.name)
export const nextDates = createVariables()
export const todayTemp = weather.list
    .filter(wth => wth.dt_txt.includes(today) || wth.dt_txt.includes(getDayAfter(1)) || wth.dt_txt.includes(getDayAfter(2)))
    .slice(1, 10)
    .map(i => { return { date: i.dt_txt.slice(11, 16), max_temp: i.main.temp_max.toFixed(0), min_temp: i.main.temp_min.toFixed(0) } })