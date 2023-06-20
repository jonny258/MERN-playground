const router = require('express').Router()

const api = require('./api')
const mongoTest = require('./mongoTest')

router.use('/api', api)
router.use('/mongo', mongoTest)

module.exports = router