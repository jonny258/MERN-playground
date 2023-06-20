const router = require('express').Router()

const boysRoutes = require('./boys-routes')
const girlsRoutes = require('./girls-routes')
const stateRoutes = require('./state-routes')

router.use('/boys', boysRoutes)
router.use('/girls', girlsRoutes)
router.use('/states', stateRoutes)

module.exports = router