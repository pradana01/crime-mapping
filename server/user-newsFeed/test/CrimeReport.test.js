const request = require('supertest')
const app = require('../app')
const { sequelize } = require('../models')
const { queryInterface } = sequelize
const TEST_TITLE = 'sampleTitle'
const TEST_DESCRIPTION = 'sampleDesc'
const TEST_LOCATION = 'sampleLoc'
const TEST_PHOTO = 'sampleLink'
const TEST_VIDEO = 'sampleLink'
const TEST_USER_ID = 99
const TEST_UPDATE_TITLE = 'updateTitle'

// delete after done
afterAll(done => {
    queryInterface
        .bulkDelete('CrimeReports', {})
        .then(() => done())
        .catch(err => done(err))
})

expect.extend({
    toBeTypeOf(value, argument) {
        const valueType = typeof value;
        let type = ''
        if (valueType === 'object') {
            if (Array.isArray(value)) {
                type = 'array'
            } else {
                type = valueType
            }
        } else {
            type = valueType
        }
        if (type === argument) {
            return {
                message: () => `expected ${value} to be type of ${type}`,
                pass: true
            };
        } else {
            return {
                message: () => `expected ${value} to be type of ${type}`,
                pass: false
            }
        }
    }
})

describe('Crime Report test', function () {

    describe('Success Adding Report', function () {
        test('Should return 201 status & an object of newly added data', function (done) {
            request(app)
                .post('/reports')
                .send({
                    title: TEST_TITLE,
                    description: TEST_DESCRIPTION,
                    location: TEST_LOCATION,
                    photo: TEST_PHOTO,
                    video: TEST_VIDEO,
                    UserId: TEST_USER_ID
                })
                .then(response => {
                    const { body, status } = response
                    expect(status).toBe(201)
                    expect(body).toHaveProperty('id')
                    expect(body).toHaveProperty('title', TEST_TITLE)
                    expect(body).toHaveProperty('description', TEST_DESCRIPTION)
                    expect(body).toHaveProperty('location', TEST_LOCATION)
                    expect(body).toHaveProperty('photo', TEST_PHOTO)
                    expect(body).toHaveProperty('video', TEST_VIDEO)
                    expect(body).toHaveProperty('UserId', TEST_USER_ID)
                    expect(body).toHaveProperty('updatedAt')
                    expect(body).toHaveProperty('createdAt')
                    done()
                })
        })
    })

    describe('Success Getting All Reports', function () {
        test('Should return 201 status & an array containing objects of crime data', function (done) {
            request(app)
                .get('/reports')
                .then(response => {
                    const { body, status } = response
                    expect(status).toBe(200)
                    expect(body).toBeTypeOf('array')
                    expect(body).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({
                                title: TEST_TITLE,
                                description: TEST_DESCRIPTION,
                                location: TEST_LOCATION,
                                photo: TEST_PHOTO,
                                video: TEST_VIDEO,
                                UserId: TEST_USER_ID
                            })
                        ])
                    )
                    done()
                })
        })
    })

    describe('Success Getting Report by ID', function () {
        test('Should return 201 status & an object of the data', function (done) {
            request(app)
                .get(`/reports`)
                .then(response => {
                    request(app)
                        .get(`/reports/${response.body[0].id}`)
                        .then(response2 => {
                            const { body, status } = response2
                            expect(status).toBe(200)
                            expect(body).toBeTypeOf('object')
                            expect(body).toEqual(
                                expect.objectContaining({
                                    title: TEST_TITLE,
                                    description: TEST_DESCRIPTION,
                                    location: TEST_LOCATION,
                                    photo: TEST_PHOTO,
                                    video: TEST_VIDEO,
                                    UserId: TEST_USER_ID
                                })
                            )
                            done()
                        })
                })
        })
    })

    describe('Success updating report', function () {
        test('Should return 200 status & an object containing the updated crime data', function (done) {
            request(app)
                .get(`/reports`)
                .then(response => {
                    request(app)
                        .put(`/reports/${response.body[0].id}`)
                        .send({
                            title: TEST_UPDATE_TITLE,
                            description: response.body[0].description,
                            location: response.body[0].location,
                            photo: response.body[0].photo,
                            video: response.body[0].video,
                            UserId: response.body[0].UserId
                        })
                        .then(response2 => {
                            const { body, status } = response2
                            expect(status).toBe(200)
                            expect(body).toBeTypeOf('object')
                            expect(body).toEqual(
                                expect.objectContaining({
                                    title: TEST_UPDATE_TITLE,
                                    description: response.body[0].description,
                                    location: response.body[0].location,
                                    photo: response.body[0].photo,
                                    video: response.body[0].video,
                                    UserId: response.body[0].UserId
                                })
                            )
                            done()
                        })
                })
        })
    })

    describe('Success deleting report', function () {
        test('Should return 200 status & an object containing a success message', function (done) {
            request(app)
                .get(`/reports`)
                .then(response => {
                    request(app)
                        .delete(`/reports/${response.body[0].id}`)
                        .then(response2 => {
                            const { body, status } = response2
                            expect(status).toBe(200)
                            expect(body).toBeTypeOf('object')
                            expect(body).toEqual(
                                expect.objectContaining({
                                    message: "Successfully deleted the report"
                                })
                            )
                            done()
                        })
                })
        })
    })
})