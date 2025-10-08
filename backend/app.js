require('dotenv').config()
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const path = require('path')

const port = 3000
const app = express()

app.use(express.static(path.resolve('..', 'frontend', 'dist')))
app.use(cors({
    origin: 'https://music-dates-1.onrender.com',
    credentials: true,
}))

app.use(cookieParser())
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', 'pages')
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))


app.use('/api', routes)
app.all('/{*any}', (req, res, next) => {
    res.sendFile(path.resolve("..", "frontend", "dist", "index.html"))
})

mongoose.connect(process.env.DB_CONNECTION_STRING).then(async () => {
    app.listen(port, async () => {
        console.log(`server started on port  ${port}`)
    })
})