<<<<<<< HEAD
const router = require('express').Router()
const CrimeReportController = require('../controllers/crimeReportController')
const CommentController = require(`../controllers/commentController`)
// const { authentication } = require('')
// const { authorization } = require('')

// router.use(authentication)
router.get('/reports', CrimeReportController.show)
router.post('/reports', CrimeReportController.add)
// router.use(authorization)
router.get('/reports/:id' ,CrimeReportController.find)
router.delete('/reports/:id', CrimeReportController.delete)
router.put('/reports/:id', CrimeReportController.update)

router.get('/comments', CommentController.show)
router.post('/comments', CommentController.add)
router.get('/comments/:id' ,CommentController.findByReportId)
router.delete('/comments/:id', CommentController.delete)
router.put('/comments/:id', CommentController.update)

module.exports = router
=======
const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/signin", userController.signIn);
router.post("/signup", userController.signUp);

module.exports = router;
>>>>>>> development
