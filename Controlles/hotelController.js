const mongoose = require("mongoose");
const {Customer,Hotel,Room,Booking} = require("../Models/model.js");


const hotelController = {
    addHotel:async(req,res)=>{
       try{
        const newHotel = new Hotel(req.body);
        const saveHotel = await newHotel.save();

        // Trả về thông tin của khách sạn vừa được thêm
        res.status(200).json({ 
            message: 'Hotel added successfully',
            data:saveHotel
        });
        }catch (error){
            res.status(500).json({ error: error.message });
        }
    },

    getAllHotel: async (req, res) => {
        try {
            const siteName = req.params.site;
            // Tìm các khách sạn có trường 'site' chứa siteName
            const hotels = await Hotel.find({ site: siteName }).populate("rooms");

            res.status(200).json({
                message: `Hotels retrieved successfully`,
                hotels: hotels
            });
        }catch (error){
            res.status(400).json({ error: error.message });
        }
    }
};

module.exports = hotelController;