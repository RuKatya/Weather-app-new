import { FC, useState } from 'react'
import { ISearchWeather } from '../typescript/intargace';
import { InputBase, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchWeather: FC<ISearchWeather> = ({ setCity }) => {
    const [err, setErr] = useState<string>("");
    function hendleGetCity(ev: React.SyntheticEvent) {
        try {
            ev.preventDefault();

            const target = ev.target as typeof ev.target & {
                searchCityInput: { value: string };
            };
            const city = target.searchCityInput.value


            if (city.length > 0) {
                if (city.match(/([A-Z])\w+/gi)) {
                    const smallLettersCity = city.toLowerCase();

                    setCity(smallLettersCity);
                    localStorage.setItem("weather-city", smallLettersCity);
                    target.searchCityInput.value = ""
                } else {
                    setErr("Enter latin letters without digits");
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Paper
            component="form"
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 280,
                backgroundColor: "rgba(54, 142, 205, 0.4)",
                margin: "0 auto"
            }}
            className="searchInput"
            onSubmit={hendleGetCity}
        >
            {/* <form className="searchInput" onSubmit={hendleGetCity}> */}
            {err.length > 0 ? <p>{err}</p> : null}
            <InputBase
                sx={{ ml: 1, flex: 1, color: "white" }}
                placeholder="Search City..."
                name="searchCityInput"

            // inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon sx={{ color: "white" }} />
            </IconButton>

            {/* <InputBase name="searchCityInput" sx={{ ml: 1, flex: 1 }} /> */}
            {/* <SearchIcon /> */}
            {/* <input type="text" name="searchCityInput" placeholder='Search City...' />
            <button type='submit'>Serach</button> */}
            {/* </form> */}
        </Paper>
    )
}

export default SearchWeather