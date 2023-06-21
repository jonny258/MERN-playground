const router = require('express').Router()

const getRedditLinks = require('./getredditlinks')

router.use('/links', getRedditLinks)

module.exports = router