const express = require('express');
const { urlencoded } = require('express');
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3000
const connectDB = require('./main/config/db.js')

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use ('/contact', require('./main/routes/useRoutes.js'))


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
}) 