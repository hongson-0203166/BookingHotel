const router = require("express").Router();

const hotelController = require("../Controlles/hotelController");



//ADD author
router.post("/addHotel/", hotelController.addHotel);
router.get("/getAllHotelSite/:site",hotelController.getAllHotel);


module.exports = router;