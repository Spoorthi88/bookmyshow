const mongoose = require("mongoose");
const Movie = require("./Movie");
const bookingSchema = new mongoose.Schema({
    movieId: String,
    movieName: String,
    theatre: String,
    time : String,
    seats: [String],
    total:Number
})
module.exports = mongoose.model("booking",bookingSchema);
