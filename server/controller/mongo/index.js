const router = require('express').Router()

const fruitRoutes = require('./fruit-routes')

router.use('/fruit', fruitRoutes)
module.exports = router