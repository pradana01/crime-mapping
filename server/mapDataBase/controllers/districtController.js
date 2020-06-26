const { District } =  require('../models')

class Control {
    static getAllDistricts(req, res, next) {
        District.findAll()
        .then(data => {
            console.log(data)
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log(err)
            throw err
        })
    }
    static getOneDistrict(req, res, next) {
        District.findByPk(Number(req.params.id))
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err)
            throw err
        })
    }
}

module.exports = Control