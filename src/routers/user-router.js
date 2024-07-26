const { Router } = require("express");
const controller = require("../controllers/user-controller");

const router = Router();

router.get("/", controller.get);
// router.get("/id/:id", controller.getID);

module.exports = router;
