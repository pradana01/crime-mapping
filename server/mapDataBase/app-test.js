require('dotenv').config()
const express =  require('express')
const app =  express()
const route = require('./routes')
const cors = require('cors')
const port = process.env.PORT || 3002

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(route)


module.exports = app