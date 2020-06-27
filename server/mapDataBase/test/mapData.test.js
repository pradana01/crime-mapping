const app = require("../app-test.js");
const { sequelize, District } = require("../models");
const request = require("supertest");
const { queryInterface } = sequelize;

const createDistrict = {
  name: "cempaka putih",
  city: "jakarta pusat",
  population: 100000,
  homicide: 1,
  assault: 1,
  harassment: 1,
  abduction: 1,
  robbery: 1,
  theft: 1,
  drugs: 1,
  fraudulency: 1,
  anarchism: 1,
};

beforeAll((done) => {
  District.create(createDistrict)
    .then(() => done())
    .catch((err) => {
      done(err);
    });
});

afterAll((done) => {
  queryInterface
    .bulkDelete("Districts", {})
    .then(() => done())
    .catch((err) => {
      done(err);
    });
});

describe("Districts route test", () => {
  describe("GET /districts - get all districts crime data", () => {
    test("Should return 200 status & an array containing objects of crime data", function (done) {
      request(app)
        .get("/districts")
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(200);
          expect(body).toEqual(expect.arrayContaining([expect.objectContaining(createDistrict)]));
          //   expect(body).toEqual(expect.arrayContaining([expect.any(Object)]));
          done();
        });
    });
  });

  describe("GET /districts/:id - get districts crime data by id", () => {
    test("Should return 200 status & an array containing objects of crime data", function (done) {
      request(app)
        .get("/districts")
        .then((response) => {
          request(app)
            .get(`/districts/${response.body[0].id}`)
            .then((response2) => {
              const { body, status } = response;
              expect(status).toBe(200);
              expect(body).toEqual(
                expect.arrayContaining([expect.objectContaining(createDistrict)])
              );
              done();
            });
        });
    });
  });
});
