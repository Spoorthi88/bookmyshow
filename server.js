const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const movieRoutes = require("./backend/routes/movieRoutes");
const bookingRoutes = require("./backend/routes/bookingRoutes");

const app = express();

//middleware

app.use(cors());
app.use(express.json());

//mongodb connection
console.log("MONGO_URL loaded:",!! process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.log(err));

app.use("/api/movies",movieRoutes);
app.use("/api/bookings",bookingRoutes);

//home routes

app.get("/",(req,res)=>{
    res.send("backend running")
});

//server

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
});
