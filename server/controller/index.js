const router = require('express').Router()

const api = require('./api')
const mongo = require('./mongo')
const scrapper = require('./scrapper')

router.use('/api', api)
router.use('/mongo', mongo)
router.use('/scrapper', scrapper)

module.exports = router