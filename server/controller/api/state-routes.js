const router = require('express').Router()

const statesDB = require('../../db/states.json')

router.get('/', (req, res) => {
    res.json(statesDB)
})

module.exports = router