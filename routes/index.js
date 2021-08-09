const express = require('express')
const router = express.Router()

const user_game = require('./user_game')
const user_biodata = require('./user_biodata')

router.get('/', (req, res) => {
    res.sender('login')
})

router.use('/user_game', user_game)
router.use('/user_biodata', user_biodata)