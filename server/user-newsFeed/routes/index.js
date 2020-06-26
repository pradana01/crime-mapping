const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/signin", userController.signIn);
router.post("/signup", userController.signUp);

module.exports = router;
