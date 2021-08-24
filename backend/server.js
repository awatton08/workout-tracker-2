const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://awatton:BBaJwh3iiCKl4gkj@url-shortener.ch0gy.mongodb.net/workoutDB", { useNewUrlParser: true, useUnifiedTopology: true })

app.use("/", require("./routes/workoutRoute"))

app.listen(3001, () => {
    console.log("Express running on port 3001")
})

