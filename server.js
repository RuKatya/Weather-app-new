const express = require('express')
const app = express()
const PORT = process.env.PORT || 6547

app.use(express.static('weather/build'))

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`)
})

/*
1. Create dark/light mode
2. Save in localStorge the city of user
3. Create compass for direction of wind
*/