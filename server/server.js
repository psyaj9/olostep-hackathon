const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')

//routes call
const authRoute = require('./routes/auth')
const scraperoute = require('./routes/selenium')

app.use(cors())
app.use(express.json())

app.use('/auth',authRoute)
app.use('/scrape',scraperoute)

//server started 
const PORT = process.env.PORT || 5002
mongoose.connect(process.env.MONGO_URL,{
    dbName:"web-scrapper-pro",
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, console.log(`server port:${PORT}`))

}).catch((err) => {
    console.log(`${err} did not connect`)
})