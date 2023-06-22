const router = require('express').Router()

router.get('/', (req, res) => {
    res.json('test')
})

router.get('/:href', (req, res) => {
    const href = req.params.href
    res.json(href)
})

module.exports = router