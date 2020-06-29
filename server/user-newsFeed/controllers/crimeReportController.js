const { CrimeReport, User } = require('../models')
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: 'andrean',
    api_key: '627525378763992',
    api_secret: '_ZKJ7Udu3eqgLQg8J6xItZeyzdY'
})

class CrimeReportController {
    static show(req, res, next) {
        CrimeReport.findAll({ include: User })
            .then(reports => { res.status(200).json(reports) })
            .catch(err => { next(err) })
    }

    static add(req, res, next) {
        const { title, description, location } = req.body
        const UserId = req.userData.id
        const {photo, video} = req.files
        let uploadedPhoto;
        let uploadedVideo;
        // console.log(photo, video)
        if(photo.mimetype !== 'image/jpeg' && photo.mimetype !== 'image/jpg' && photo.mimetype !== 'image/png' || video.mimetype !== 'video/mp4') {
            console.log('error')
        } else {
            // console.log('ini photo', photo)
            // console.log('ini video', video)
            cloudinary.uploader.upload(photo.tempFilePath, function(err, result) {
                uploadedPhoto = result.url
                cloudinary.uploader.upload(video.tempFilePath, { resource_type: 'video'}, function(vidErr, vidResult) {
                    uploadedVideo = vidResult.url
                    CrimeReport.create({ title, description, location, photo: uploadedPhoto, video: uploadedVideo, UserId })
                        .then(report => {
                            console.log(report)
                            res.status(201).json(report)
                        })
                        .catch(err => { next(err) })   
                })
            })
        }
    }

    static find(req, res, next) {
        CrimeReport.findByPk(req.params.id, {
            include: User
        })
            .then(report => { res.status(200).json(report) })
            .catch(err => { next(err) })
    }

    static delete(req, res, next) {
        CrimeReport.destroy({ where: { id: req.params.id } })
            .then(result => { res.status(200).json({ message: 'Successfully deleted the report' }) })
            .catch(err => { next(err) })
    }

    static update(req, res, next) {
        const { title, description, location } = req.body
        const {photo, video} = req.files
        let uploadedPhoto;
        let uploadedVideo;
        cloudinary.uploader.upload(photo.tempFilePath, function(err, result) {
            uploadedPhoto = result.url
            cloudinary.uploader.upload(video.tempFilePath, {resource_type: 'video'}, function(vidErr, vidResult) {
                uploadedVideo = vidResult.url
                CrimeReport.update({ title, description, location, photo: uploadedPhoto, video:uploadedVideo }, {
                    where: { id: req.params.id }
                })
                    .then(() => { return CrimeReport.findByPk(req.params.id) })
                    .then(report => { res.status(200).json(report) })
                    .catch(err => { next(err) })
            })
        })
    }
}

module.exports = CrimeReportController