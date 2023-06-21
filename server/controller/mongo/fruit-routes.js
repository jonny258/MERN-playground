const router = require('express').Router()
const Fruit = require('../../models/fruits')

router.get('/', async (req, res) => {
    try{
        const result = await Fruit.find({})
        res.status(200).json(result)
    }catch(err){
        res.status(500).json(err)
    }

})

router.post('/', async(req, res) => {
    try{
        console.log(req.body)
       const newFruit = new Fruit({
            fruit: req.body.fruit,
            brand: req.body.brand,
            price: req.body.price,
            stock: req.body.stock
        })
        newFruit.save()

        res.status(200).json(newFruit)
    }catch(err){
        res.status(500).json(err)
    }

})

module.exports = router