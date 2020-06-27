const app = require('../app-test.js')
const { District, sequelize } = require('../models')
const request = require('supertest')
const { queryInterface } = sequelize

afterAll((done) => {
    done()
})

describe('Districts route test', () => {
    describe('GET /districts - get all districts crime data', () => {
        test('200 Success get all data - should return data', () => {
            request(app)
            .get('/districts')
            .then((response) => {
                const { body, status } = response
                expect(status).toBe(201);
                expect(body).toBeTypeOf('array')
                done()
            })
        })
    })
})