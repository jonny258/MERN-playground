const router = require('express').Router()

router.get('/', (req, res) => {
    res.json('get all fruits')
})

router.post('/', (req, res) => {
    res.json('post all fruits')
})

module.exports = router