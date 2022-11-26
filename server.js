const express = require('express')
const app = express()
const PORT = process.env.PORT || 6547

app.use(express.static('weather/build'))

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`)
})