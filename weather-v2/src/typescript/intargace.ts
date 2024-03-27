interface ICity {
    coord: { lat: number, lon: number }
    country: string
    id: number
    name: string
    population: number
    sunrise: number
    sunset: number
    timezone: number
}

interface Iclouds {
    all: number
}

interface IMailItem {
    feels_like: number
    grnd_level: number
    humidity: number
    pressure: number
    sea_level: number
    temp: number
    temp_kf: number
    temp_max: number
    temp_min: number
}

interface ISysItem {
    pod: string
}

interface IWeatherItem {
    description: string
    icon: string
    id: number
    main: string
}

interface IWind {
    deg: number
    gust: number
    speed: number
}

interface IListObject {
    clouds: Iclouds
    dt: number
    dt_txt: string
    main: IMailItem
    pop: number
    sys: ISysItem
    weather: Array<IWeatherItem>
    wind: IWind
    visibility: number
}

export interface IAllDataWeather {
    cnt: number
    cod: string
    city: ICity
    message: number
    list: Array<IListObject>
}


























