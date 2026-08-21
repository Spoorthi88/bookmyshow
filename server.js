const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");require("dotenv").config();

const movieRoutes = require("./routes/movieRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

//middleware

app.use(cors());
app.use(express.json());

//mongodb connection
mongoose.connect(process.env.MONGO_URL)
.then()=>console.log("mongodb connected");
.catch(err)=>console.log(err));
