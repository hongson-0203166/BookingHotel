const router = require("express").Router();

const customerController = require("../Controlles/customerController");



//ADD author
router.post("/addCustomer/", customerController.addCustomer);

router.get("/getAllCustomerwithName/:name",customerController.getCustomer);



module.exports = router;