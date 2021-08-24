const { json } = require("body-parser")
const express = require("express")

const router= express.Router()

const Exercise = require("../models/exerciseModel")

// route for operations on a single exercise 
router.route("/exercise")

// create one new exercise 
.post((req, res) => {
    const id = req.body.id
    const name = req.body.name
    const category = req.body.category
    const description = req.body.description
    const newExercise = new Exercise(
        {
            id,
            name,
            category,
            description
        }
    )
    newExercise.save()
})

// update one specific exercise
.put((req, res) => {
    Exercise.updateOne( 
        {id: req.body.id}, // query to find record
        {name: req.body.name, category: req.body.category, description: req.body.description }, // changes to make 
        function(err, res) {
            if (err) throw err;
        }
    )
})

// delete one specific exercise 
.delete((req, res) => {
    console.log(req.body.id)
    Exercise.deleteOne({id: req.body.id})
    .then(result => console.log(`Deleted ${result.deletedCount} item.`))
    .catch(err => console.error(`Delete failed with error: ${err}`))
})

// route for full list of exercises
router.route("/exercises")

// get all the exercises
.get((req, res) => {
    Exercise.find().then(foundExercises => res.json(foundExercises))
})

module.exports = router;