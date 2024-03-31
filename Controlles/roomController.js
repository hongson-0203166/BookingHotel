const mongoose = require("mongoose");
const {Customer,Hotel,Room,Booking} = require("../Models/model.js");


const roomController = {
    addRoom:async(req,res)=>{
        try{
            const newRoom = new Room(req.body);
            const savedRoom = await newRoom.save();

            if(req.body.hotel){
                const hotel = await Hotel.findById(req.body.hotel);
                
                if (hotel) {
                    await hotel.updateOne({ $push: { rooms: savedRoom._id } }).exec();
                    await hotel.save(); // Move this inside the conditional block
                } else {
                    return res.status(404).json({ message: 'Hotel not found' });
                }
                res.status(201).json({ message: 'Room added successfully', savedRoom });
            }
        }catch(error){
            res.status(500).json({  error: error.message });
        }
    }
};
module.exports = roomController;