const router = require('express').Router()
const axios = require('axios')
const NEWS_FEED_SERVICES_URL = `http://localhost:3001`
const MAP_SERVICES_URL = `http://localhost:3002`

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

router.post('/reports', (req, res) => {
    const access_token = req.headers.access_token
    const { title, description, location, photo, video } = req.body
    axios({
        method: 'post',
        url: `${NEWS_FEED_SERVICES_URL}/reports`,
        data:{ title, description, location, photo, video },
        headers: { access_token }
    })
        .then(resp => { res.send(resp.data) })
        .catch(err => { res.send(err) })
})

router.put('/reports/:id', (req, res) => {
    const access_token = req.headers.access_token
    const { title, description, location, photo, video } = req.body
    axios({
        method: 'put',
        url: `${NEWS_FEED_SERVICES_URL}/reports/${req.params.id}`,
        data:{ title, description, location, photo, video },
        headers: { access_token }
    })
        .then(resp => { res.send(resp.data) })
        .catch(err => { res.send(err) })
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