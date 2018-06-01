const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000
const profile = require('./routes/profile')


app.use(cors())

app.use('/profile', profile)

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.listen(function () {
    console.log('Listening on ' + port)
})


