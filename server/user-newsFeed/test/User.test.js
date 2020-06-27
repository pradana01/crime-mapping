const app = require("../app.js");
const { User, sequelize } = require("../models");
const request = require("supertest");
const { queryInterface } = sequelize;

describe("User Routes Test", () => {
  const createUser = {
    name: "Admin",
    location: "cilandak",
    username: "admin",
    email: "admin@gmail.com",
    password: "admin",
  };

  const newUser = {
    name: "Admin2",
    location: "cikini",
    username: "admin2",
    email: "admin2@gmail.com",
    password: "admin2",
  };

  const realUser = {
    username: "admin",
    password: "admin",
  };

  const wrongPassword = {
    username: "admin",
    password: "salah",
  };

  const wrongUsername = {
    username: "salah",
    password: "admin",
  };

  describe("POST /register - create new user", () => {
    beforeAll((done) => {
      User.create(createUser)
        .then((_) => {
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    afterAll((done) => {
      queryInterface
        .bulkDelete("Users", {})
        .then(() => done())
        .catch((err) => done(err));
    });

    test("201 Success register - should create new User", (done) => {
      request(app)
        .post("/signup")
        .send(newUser)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(201);
          expect(body).toHaveProperty("id", expect.any(Number));
          expect(body).toHaveProperty("name", newUser.name);
          expect(body).toHaveProperty("location", newUser.location);
          expect(body).toHaveProperty("username", newUser.username);
          expect(body).toHaveProperty("email", newUser.email);
          done();
        });
    });

    test("400 username already exist", (done) => {
      request(app)
        .post("/signup")
        .send(createUser)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toHaveProperty("message", "Username Already Exist");
          done();
        });
    });

    test("400 validation error", (done) => {
      request(app)
        .post("/signup")
        .send(wrongUsername)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toHaveProperty("message", "Validation Error");
          done();
        });
    });
  });

  describe("POST /signin - user authentication process", () => {
    beforeAll((done) => {
      User.create(createUser)
        .then((_) => {
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    afterAll((done) => {
      queryInterface
        .bulkDelete("Users", {})
        .then(() => done())
        .catch((err) => done(err));
    });

    test("200 Success login - should return access_token", (done) => {
      request(app)
        .post("/signin")
        .send(realUser)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(200);
          expect(body).toHaveProperty("access_token", expect.any(String));
          done();
        });
    });

    test("400 Failed login - wrong password", (done) => {
      request(app)
        .post("/signin")
        .send(wrongPassword)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toHaveProperty("message", "Wrong Password");
          done();
        });
    });

    test("400 Failed login - wrong username", (done) => {
      request(app)
        .post("/signin")
        .send(wrongUsername)
        .then((response) => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toHaveProperty("message", "Wrong Username");
          done();
        });
    });
  });
});
