const express = require('express')
const app = express()
const router = require('./routes')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'))
app.use('/', routes)

app.listen(3000, () => {
    console.log('Listening on port 3000')
})

