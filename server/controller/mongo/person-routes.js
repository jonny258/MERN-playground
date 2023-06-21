const router = require('express').Router()
const Person = require('../../models/person')

router.get('/', async (req, res) => {
    try{
        const response = await Person.find({})
        res.status(200).json(response)
    }catch(err){
        res.status(500).json(err)
    }

})

router.post('/', (req, res) => {
    //console.log(req.body)
    const newPerson = new Person({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
    })
    console.log(newPerson)
    newPerson.save()
})


module.exports = router