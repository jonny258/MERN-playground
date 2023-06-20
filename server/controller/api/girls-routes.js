const router = require('express').Router()

const girlsDB = require('../../db/girls.json')

router.get('/', (req, res) => {
    res.json(girlsDB)
})

module.exports = router