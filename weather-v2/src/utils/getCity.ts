
export const getCity = () => {
    const defaultCity = "jerusalem"
    const weatherCity = window?.localStorage?.getItem("weather-city")

    if (!weatherCity) {
        localStorage.setItem("weather-city", defaultCity)
        return defaultCity
    }

    return weatherCity
}