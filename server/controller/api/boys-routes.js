const router = require('express').Router()

const boysDB = require('../../db/boys.json')

router.get('/', (req, res) => {
    res.json(boysDB)
})

module.exports = router