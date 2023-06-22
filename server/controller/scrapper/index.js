const router = require('express').Router()

const getRedditLinks = require('./getredditlinks')
const pagesRoutes = require('./pages-routes')

router.use('/pages', pagesRoutes)
router.use('/links', getRedditLinks)

module.exports = router