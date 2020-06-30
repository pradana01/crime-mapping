const router = require('express').Router()
const axios = require('axios')
const { route } = require('../../user-newsFeed/routes')
const cloudinary = require('cloudinary').v2
const NEWS_FEED_SERVICES_URL = `http://localhost:3001`
const MAP_SERVICES_URL = `http://localhost:3002`

cloudinary.config({
    cloud_name: 'andrean',
    api_key: '627525378763992',
    api_secret: '_ZKJ7Udu3eqgLQg8J6xItZeyzdY'
})

//USER
router.post('/signin', (req, res) => {
    let { username, password } = req.body
    axios.post(`${NEWS_FEED_SERVICES_URL}/signin`, { username, password })
        .then(resp => {
            res.send(resp.data)
        })
        .catch(err => { res.send(err) })
})

router.post('/signup', (req, res) => {
    let { name, location, username, email, password } = req.body
    axios.post(`${NEWS_FEED_SERVICES_URL}/signup`, { name, location, username, email, password })
        .then(resp => { res.send(resp.data) })
        .catch(err => { res.send(err) })
})


//CRIME REPORTS
router.get('/reports', (req, res) => {
    const access_token = req.headers.access_token
    axios({
        method: 'get',
        url: `${NEWS_FEED_SERVICES_URL}/reports`,
        headers: { access_token }
    })
        .then(resp => { res.send(resp.data) })
        .catch(err => { res.send(err) })
})

router.get('/reports/:id', (req, res) => {
    const access_token = req.headers.access_token
    axios({
        method: 'get',
        url: `${NEWS_FEED_SERVICES_URL}/reports/${req.params.id}`,
        headers: { access_token }
    })
        .then(resp => { res.send(resp.data) })
        .catch(err => { res.send(err) })
})

router.get('/myReports', (req, res) => {
    const access_token = req.headers.access_token
    axios({
        method: 'get',
        url: `${NEWS_FEED_SERVICES_URL}/myReports`,
        headers: { access_token }
    })
    .then(resp => { res.send(resp.data) })
    .catch(err => { res.send(err) })
})

router.post('/reports', (req, res) => {
    const access_token = req.headers.access_token
    const { title, description, location } = req.body
    const { photo, video } = req.files
    let uploadedPhoto;
    let uploadedVideo;
    if(photo.mimetype !== 'image/jpeg' && photo.mimetype !== 'image/jpg' && photo.mimetype !== 'image/png') {
        console.log('gagal')
    } else {
        if(!video) {
            cloudinary.uploader.upload(photo.tempFilePath, function(err, result) {
                uploadedPhoto = result.url
                let data = {title, description, location, photo: uploadedPhoto}
                axios({
                    method: 'post',
                    url: `${NEWS_FEED_SERVICES_URL}/reports`,
                    data: data,
                    headers: { access_token }
                })
                .then(resp => { 
                    res.send(resp.data)
                })
                .catch(err => { res.send(err) })
            })
        } else {
            cloudinary.uploader.upload(photo.tempFilePath, function(err, result) {
                uploadedPhoto = result.url
                cloudinary.uploader.upload(video.tempFilePath, { resource_type: 'video'}, function(vidErr, vidResult) {
                    uploadedVideo = vidResult.url
                    let data = {title, description, location, photo: uploadedPhoto, video: uploadedVideo}
                    axios({
                        method: 'post',
                        url: `${NEWS_FEED_SERVICES_URL}/reports`,
                        data: data,
                        headers: {
                            access_token 
                        }
                    })
                        .then(resp => { 
                            res.send(resp.data) 
                        })
                        .catch(err => { res.send(err) })
                })
            })
        }
    }
})

router.put('/reports/:id', (req, res) => {
    const access_token = req.headers.access_token
    const { title, description, location } = req.body
    const { photo, video } = req.files
    let uploadedPhoto;
    let uploadedVideo;
    if(photo.mimetype !== 'image/jpeg' && photo.mimetype !== 'image/jpg' && photo.mimetype !== 'image/png') {
        console.log('gagal')
    } else {
        if(!video) {
            cloudinary.uploader.upload(photo.tempFilePath, function(err, result) {
                uploadedPhoto = result.url
                let data = {title, description, location, photo: uploadedPhoto}
                axios({
                    method: 'put',
                    url: `${NEWS_FEED_SERVICES_URL}/reports/${req.params.id}`,
                    data: data,
                    headers: { access_token }
                })
                .then(resp => { res.send(resp.data) })
                .catch(err => { res.send(err) })
            })
        } else {
            cloudinary.uploader.upload(photo.tempFilePath, function(err, result) {
                if (err) console.log(err);
                uploadedPhoto = result.url
                cloudinary.uploader.upload(video.tempFilePath, { resource_type: 'video'}, function(vidErr, vidResult) {
                    uploadedVideo = vidResult.url
                    let data = {title, description, location, photo: uploadedPhoto, video: uploadedVideo}
                    console.log(data)
                    axios({
                        method: 'put',
                        url: `${NEWS_FEED_SERVICES_URL}/reports/${req.params.id}`,
                        data: data,
                        headers: {
                            access_token 
                        }
                    })
                    .then(resp => { res.send(resp.data) })
                    .catch(err => { res.send(err) })
                })
            })
        }
    }
    
})

router.delete('/reports/:id', (req, res) => {
    const access_token = req.headers.access_token
    axios({
        method: 'delete',
        url: `${NEWS_FEED_SERVICES_URL}/reports/${req.params.id}`,
        headers: { access_token }
    })
        .then(resp => { res.send(resp.data) })
        .catch(err => { res.send(err) })
})

//COMMENTS
router.get('/comments', (req, res) => {
    const access_token = req.headers.access_token
    axios({
        method: 'get',
        url: `${NEWS_FEED_SERVICES_URL}/comments`,
        headers: { access_token }
    })
        .then(resp => { res.send(resp.data) })
        .catch(err => { res.send(err) })
})

router.get('/comments/:id', (req, res) => {
    const access_token = req.headers.access_token
    axios({
        method: 'get',
        url: `${NEWS_FEED_SERVICES_URL}/comments/${req.params.id}`,
        headers: { access_token }
    })
        .then(resp => { res.send(resp.data) })
        .catch(err => { res.send(err) })
})

router.post('/comments', (req, res) => {
    const access_token = req.headers.access_token
    const { comment, CrimeReportId } = req.body
    axios({
        method: 'post',
        url: `${NEWS_FEED_SERVICES_URL}/comments`,
        data:{ comment, CrimeReportId },
        headers: { access_token }
    })
        .then(resp => { res.send(resp.data) })
        .catch(err => { res.send(err) })
})

router.put('/comments/:id', (req, res) => {
    const access_token = req.headers.access_token
    const { comment, CrimeReportId } = req.body
    axios({
        method: 'put',
        url: `${NEWS_FEED_SERVICES_URL}/comments/${req.params.id}`,
        data:{ comment, CrimeReportId },
        headers: { access_token }
    })
        .then(resp => { res.send(resp.data) })
        .catch(err => { res.send(err) })
})

router.delete('/comments/:id', (req, res) => {
    const access_token = req.headers.access_token
    axios({
        method: 'delete',
        url: `${NEWS_FEED_SERVICES_URL}/comments/${req.params.id}`,
        headers: { access_token }
    })
        .then(resp => { res.send(resp.data) })
        .catch(err => { res.send(err) })
})

//MAP (DISTRICTS)
router.get('/districts', (req, res) => {
    // const access_token = req.headers.access_token
    axios({
        method: 'get',
        url: `${MAP_SERVICES_URL}/districts`,
        // headers: { access_token }
    })
        .then(resp => { res.send(resp.data) })
        .catch(err => { res.send(err) })
})

router.get('/districts/:id', (req, res) => {
    // const access_token = req.headers.access_token
    axios({
        method: 'get',
        url: `${MAP_SERVICES_URL}/districts/${req.params.id}`,
        // headers: { access_token }
    })
        .then(resp => { res.send(resp.data) })
        .catch(err => { res.send(err) })
})

module.exports = router