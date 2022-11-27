
export const getCity = () => {
    const defaultCity = "jerusalem"
    const weatherCity = `${window?.localStorage?.getItem("weather-city")}`;

    if (weatherCity.includes(null)) return defaultCity

    return weatherCity
}