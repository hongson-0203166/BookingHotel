const mongoose = require("mongoose");
const {Customer,Hotel,Room,Booking} = require("../Models/model.js");



const bookingController = {
    addBooking:async(req,res)=>{
        try{
            const newBooking = new Booking(req.body);

            // Lưu booking mới vào cơ sở dữ liệu
            const savedBooking = await newBooking.save();

           
            await Customer.updateOne({ $push: { bookings: savedBooking._id } }).exec();
            res.status(201).json({ message: 'Booking added successfully', savedBooking });
            
        }catch(error){
            res.status(500).json({  error: error.message });
        }
    }
};
module.exports = bookingController;
