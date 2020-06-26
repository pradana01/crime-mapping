const route =  require('express').Router()
const districtController = require('../controllers/districtController')

route.get('/districts', districtController.getAllDistricts)
route.get('/districts/:id', districtController.getOneDistrict)

module.exports = route