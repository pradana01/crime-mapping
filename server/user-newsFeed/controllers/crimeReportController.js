const { CrimeReport, User } = require('../models')

class CrimeReportController {
    static show(req, res, next){
        CrimeReport.findAll({include: User})
        .then( reports => { res.status(200).json(reports) })
        .catch( err => { next(err) })
    }

    static add(req, res, next){
        const { title, description, location, photo, video } = req.body
        const UserId = req.userData.id
        CrimeReport.create({ title, description, location, photo, video, UserId })
        .then( report => { res.status(201).json(report) })
        .catch( err => { next(err) })
    }

    static find(req, res, next){
        CrimeReport.findByPk(req.params.id, {
            include: User
        })
        .then( report => { res.status(200).json(report) })
        .catch( err => { next(err) })
    }

    static delete(req, res, next){
        CrimeReport.destroy({ where: { id : req.params.id }})
        .then( result => { res.status(200).json({message: 'Successfully deleted the report'}) })
        .catch( err => { next(err) })
    }

    static update(req, res, next){
        const { title, description, location, photo, video } = req.body
        CrimeReport.update({ title, description, location, photo, video }, {
            where: { id: req.params.id }
        })
        .then( () => { return CrimeReport.findByPk(req.params.id) })
        .then( report => { res.status(200).json(report) })
        .catch(err => { next(err) })
    }
}

module.exports = CrimeReportController