const router = require('express').Router()

router.get('/', (req, res)=> {
    res.json('mongo')
})

module.exports = router