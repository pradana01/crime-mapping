const express = require('express')
const app = express()
const routes = require('./routers')
const fileupload = require('express-fileupload')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileupload({useTempFiles: true}))
app.use(routes)

app.listen(3000, () => {
    console.log('Orchestrator is online on port 3000')
})