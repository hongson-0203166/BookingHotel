const router = require("express").Router();

const roomController = require("../Controlles/roomController");
router.post("/addRoom/", roomController.addRoom);
module.exports = router;