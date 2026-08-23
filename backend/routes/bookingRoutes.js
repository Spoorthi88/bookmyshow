const express = require("express");
const router = express.Router();
const Booking = require("../models/Bookings");
 //get api for booked seats

 router.get("/",async (req,res) => {
   const {movieId, theatre,date,time}= req.query;
   try{
    const bookings = await Booking.find({
        movieId,
        theatre,
        date,
        time
    });
    let bookedSeats = [];
    bookings.forEach((booking)=>{
        bookedSeats.push(...booking.seats);
    });
    res.json(bookedSeats);
   }
   catch(err){
    res.status(500).json({
        message:err.message
    });
   }
 });

// post the bookings

router.post("/", async(req,res)=>{
    try{
        const booking = new Booking(req.body);
        await booking.save();
        res.json({
            success:true,
            message:"booking successful",
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            message:err.message,
    
        });
        
    }
});

module.exports = router;
