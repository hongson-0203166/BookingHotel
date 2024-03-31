const mongoose = require("mongoose");
//const { removeDiacritics } = require('diacritics');
const {Customer,Hotel,Room,Booking} = require("../Models/model.js");


const customerController = {
    addCustomer:async(req,res)=>{
        try{
            const newCustomer = new Customer(req.body);
            const saveCustomer = await newCustomer.save();
            res.status(201).json({message: `Customer save successfully`,data: saveCustomer});
        }catch (error){
            res.status(500).json({ error: error.message });
        }
    },
    getCustomer:async(req,res)=>{
       try{
        // Loại bỏ dấu đi khỏi tên trước khi tạo biểu thức chính quy
        
        const namePattern = new RegExp(req.params.name, 'i');
            const customers = await Customer.find({ name: { $regex: namePattern } }).populate("bookings");

        // Trả về thông tin của khachs hang vừa booking
        res.status(200).json({
            message: `Customer retrieved successfully`,
            customers: customers
        });
        }catch (error){
            res.status(500).json({ error: error.message });
        }
    }
};


module.exports = customerController;
