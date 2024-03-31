const mongoose = require("mongoose");



const customerSchema = new mongoose.Schema({
    name: { 
        type: String
    },
    email: { 
        type: String
    },
    phoneNumber: { 
        type: String
    },
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking'
    }]
});
let Customer = mongoose.model('Customer', customerSchema);





const hotelSchema = new mongoose.Schema({
    site: {type: String},
    hotel_name:{type:String},
    rooms:
     [
        { 
            type: mongoose.Schema.Types.ObjectId, ref: 'Room' 
        }
    ],
    type: {type: String},
    urlHotel: 
    [
        {
         type: String 
        }
    ]
});
let Hotel = mongoose.model('Hotel', hotelSchema);





const roomSchema = new mongoose.Schema({
    roomNumber: { type: Number },
    roomType: [
        { 
            type: String
        }
    ],
    state: { type: String },
    price: { type: Number},
    urlRoom: [
        {
         type: String 
        }
    ],
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel'}
});
let Room = mongoose.model('Room', roomSchema);




const bookingSchema = new mongoose.Schema({
    customer: {type: mongoose.Schema.Types.ObjectId,ref: 'Customer'},
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel'},
    checkInDate: { type: Date},
    checkOutDate: { type: Date}
});
let Booking = mongoose.model('Booking', bookingSchema);



module.exports = {Customer,Hotel,Room,Booking};