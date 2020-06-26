const request = require('supertest')
const app = require('../app')
const { sequelize } = require('../models')
const { queryInterface } = sequelize
const TEST_COMMENT = 'sampleComment'
const TEST_CRIME_REPORT_ID = 99
const TEST_USER_ID = 99
const TEST_UPDATE_COMMENT = 'updateComment'

// delete after done
afterAll(done => {
    queryInterface
        .bulkDelete('Comments', {})
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

describe('Comment test', function () {

    describe('Success Adding Comment', function () {
        test('Should return 201 status & an object of newly added comment', function (done) {
            request(app)
                .post('/comments')
                .send({
                    comment: TEST_COMMENT,
                    CrimeReportId: TEST_CRIME_REPORT_ID,
                    UserId: TEST_USER_ID
                })
                .then(response => {
                    const { body, status } = response
                    expect(status).toBe(201)
                    expect(body).toHaveProperty('id')
                    expect(body).toHaveProperty('comment', TEST_COMMENT)
                    expect(body).toHaveProperty('CrimeReportId', TEST_CRIME_REPORT_ID)
                    expect(body).toHaveProperty('UserId', TEST_USER_ID)
                    expect(body).toHaveProperty('updatedAt')
                    expect(body).toHaveProperty('createdAt')
                    done()
                })
        })
    })

    describe('Success Getting All Comments', function () {
        test('Should return 201 status & an array containing objects of comments', function (done) {
            request(app)
                .get('/comments')
                .then(response => {
                    const { body, status } = response
                    expect(status).toBe(200)
                    expect(body).toBeTypeOf('array')
                    expect(body).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({
                                comment: TEST_COMMENT,
                                CrimeReportId: TEST_CRIME_REPORT_ID,
                                UserId: TEST_USER_ID
                            })
                        ])
                    )
                    done()
                })
        })
    })

    describe('Success Getting Comments by CrimeReportID', function () {
        test('Should return 201 status & an object of the comments', function (done) {
            request(app)
                .get(`/comments`)
                .then(response => {
                    request(app)
                        .get(`/comments/${response.body[0].CrimeReportId}`)
                        .then(response2 => {
                            const { body, status } = response2
                            expect(status).toBe(200)
                            expect(body).toBeTypeOf('array')
                            expect(body).toEqual(
                                expect.arrayContaining([
                                    expect.objectContaining({
                                        comment: TEST_COMMENT,
                                        CrimeReportId: TEST_CRIME_REPORT_ID,
                                        UserId: TEST_USER_ID
                                    })
                                ])
                            )
                            done()
                        })
                })
        })
    })

    describe('Success updating comment', function () {
        test('Should return 200 status & an object containing the updated comment', function (done) {
            request(app)
                .get(`/comments`)
                .then(response => {
                    request(app)
                        .put(`/comments/${response.body[0].id}`)
                        .send({
                            comment: TEST_UPDATE_COMMENT,
                            CrimeReportId: response.body[0].CrimeReportId,
                            UserId: response.body[0].UserId
                        })
                        .then(response2 => {
                            const { body, status } = response2
                            expect(status).toBe(200)
                            expect(body).toBeTypeOf('object')
                            expect(body).toEqual(
                                expect.objectContaining({
                                    comment: TEST_UPDATE_COMMENT,
                                    CrimeReportId: response.body[0].CrimeReportId,
                                    UserId: response.body[0].UserId
                                })
                            )
                            done()
                        })
                })
        })
    })

    describe('Success deleting comment', function () {
        test('Should return 200 status & an object containing a success message', function (done) {
            request(app)
                .get(`/comments`)
                .then(response => {
                    request(app)
                        .delete(`/comments/${response.body[0].id}`)
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