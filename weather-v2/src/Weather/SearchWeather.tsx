import { FC } from 'react'
import { getCity } from './weathercont'

const SearchWeather: FC = () => {
    return (
        <form onSubmit={getCity}>
            <input type="text" name="searchCityInput" placeholder='Search City...' />
            <button type='submit'>Serach</button>
        </form>
    )
}

export default SearchWeather