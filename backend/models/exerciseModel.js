const mongoose = require("mongoose");

const exercisesSchema = {
    id: String,
    name: String,
    category: String,
    description: String
}

const Exercise = mongoose.model("Exercise", exercisesSchema)

module.exports = Exercise;