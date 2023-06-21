const router = require('express').Router()

const fruitRoutes = require('./fruit-routes')
const personRoutes = require('./person-routes')

router.use('/fruit', fruitRoutes)
router.use('/person', personRoutes)
module.exports = router