const router = require("express").Router();
const CrimeReportController = require("../controllers/crimeReportController");
const CommentController = require(`../controllers/commentController`);
const UserController = require("../controllers/userController");
const authentication = require("../middlewares/authentication");
// const { authorization } = require('')

router.post("/signin", UserController.signIn);
router.post("/signup", UserController.signUp);
router.use(authentication);
router.get("/reports", CrimeReportController.show);
router.post("/reports", CrimeReportController.add);
router.get("/myReports", CrimeReportController.showUserReports)
// router.use(authorization)
router.get("/reports/:id", CrimeReportController.find);
router.delete("/reports/:id", CrimeReportController.delete);
router.put("/reports/:id", CrimeReportController.update);

router.get("/comments", CommentController.show);
router.post("/comments", CommentController.add);
router.get("/comments/:id", CommentController.findByReportId);
router.delete("/comments/:id", CommentController.delete);
router.put("/comments/:id", CommentController.update);

module.exports = router;
