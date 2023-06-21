const router = require('express').Router()

const api = require('./api')
const mongo = require('./mongo')

router.use('/api', api)
router.use('/mongo', mongo)

module.exports = router