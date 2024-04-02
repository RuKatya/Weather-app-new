import { IAllDataWeather } from "../typescript/intargace";

export const getCity = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    const target = ev.target as typeof ev.target & {
        searchCityInput: { value: string };
    };
    const city = target.searchCityInput.value
    localStorage.setItem("city", city)
}

const today = new Date().toISOString().slice(0, 10);

export const getTime = (time: number) => {
    return new Date(time * 1000).toLocaleString("en-US", { year: 'numeric', month: 'numeric', day: 'numeric', minute: "numeric", hour: "numeric", hour12: false })
}

export const currentTime = () => {
    return new Date().toLocaleString("en-US", { minute: "numeric", hour: "numeric", hour12: false })
}

export const capitalizeFirstLetter = (text: string) => {
    return text.replace(/^\w/, (c) => c.toUpperCase());
}

const getDayAfter = (day: number) => {
    const d = new Date()
    d.setDate(d.getDate() + day)
    return d.toISOString().slice(0, 10)
}

export const createVariables = (weather: IAllDataWeather) => {
    const nextDays = [];
    for (let i = 1; i < 5; i++) {
        nextDays[i - 1] = weather.list.filter(wth => wth.dt_txt.includes(getDayAfter(i)))
    }
    return nextDays;
}

export const weatherList = (weather: IAllDataWeather) => {
    console.log(weather)
    return weather.list
        .filter(wth => { return wth.dt_txt.includes(today) || wth.dt_txt.includes(getDayAfter(1)) || wth.dt_txt.includes(getDayAfter(2)) })
        .slice(1, 10)
        .map(i => { return { date: i.dt_txt.slice(11, 16), max_temp: i.main.temp_max.toFixed(0), min_temp: i.main.temp_min.toFixed(0) } })
}