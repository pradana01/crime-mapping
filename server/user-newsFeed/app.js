const express = require('express')
const cors = require('cors')
const routes = require('./routes')
require('dotenv').config()
// const error = require('./middlewares/errorHandler')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors())
app.use(routes)
// app.use(error)

app.listen(port, () => {
    console.log('This app is listening to port : ', port)
})

module.exports = app