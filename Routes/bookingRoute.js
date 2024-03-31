const router = require("express").Router();

const bookingController = require("../Controlles/bookingController");



//ADD author
router.post("/booking/", bookingController.addBooking);



module.exports = router;