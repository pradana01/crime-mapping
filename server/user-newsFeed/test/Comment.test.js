const request = require("supertest");
const app = require("../app");
const { sequelize, User, Comment } = require("../models");
const { generateToken } = require("../helpers/jwt");
const { queryInterface } = sequelize;

const createUser = {
  name: "Admin2",
  location: "cilandak",
  username: "admin",
  email: "admin@gmail.com",
  password: "admin",
};

let access_token;

const createComment = {
  comment: "test comment",
  CrimeReportId: 1,
  UserId: 10,
};

const newComment = {
  comment: "test comment",
  CrimeReportId: 2,
  UserId: 11,
};

beforeAll((done) => {
  User.create(createUser)
    .then((user) => {
      let payload = { id: user.id, email: user.email };
      access_token = generateToken(payload);
      userId = user.id;
      return Comment.create(createComment);
    })
    .then(() => done())
    .catch((err) => {
      done(err);
    });
});

afterAll((done) => {
  queryInterface
    .bulkDelete("Comments", {})
    .then(() => {
      return queryInterface.bulkDelete("Users", {});
    })
    .then(() => done())
    .catch((err) => done(err));
});

describe("Comment test", function () {
  //add comment
  test("Should return 201 status & an object of newly added comment", function (done) {
    request(app)
      .post("/comments")
      .set("access_token", access_token)
      .send(newComment)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(201);
        // expect(body).toHaveProperty("id", expect.any(Number));
        expect(body).toHaveProperty("comment", body.comment);
        expect(body).toHaveProperty("CrimeReportId", body.CrimeReportId);
        expect(body).toHaveProperty("UserId", body.UserId);
        expect(body).toHaveProperty("updatedAt");
        expect(body).toHaveProperty("createdAt");
        done();
      });
  });

  test("Should return 400 status & error message", function (done) {
    request(app)
      .post("/comments")
      .send(newComment)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(400);
        expect(body).toHaveProperty("message", "You Should Login First");
        done();
      });
  });

  //get all comment
  test("Should return 200 status & an array containing objects of comments", function (done) {
    request(app)
      .get("/comments")
      .set("access_token", access_token)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body).toEqual(
          expect.arrayContaining([expect.objectContaining(createComment, newComment)])
        );
        done();
      });
  });

  test("Should return 400 status & error message", function (done) {
    request(app)
      .get("/comments")
      .send(newComment)
      .then((response) => {
        const { body, status } = response;
        expect(status).toBe(400);
        expect(body).toHaveProperty("message", "You Should Login First");
        done();
      });
  });

  //get all comment by CrimeReportId
  test("Should return 200 status & an object of the comments", function (done) {
    request(app)
      .get(`/comments`)
      .set("access_token", access_token)
      .then((response) => {
        request(app)
          .get(`/comments/${response.body[0].CrimeReportId}`)
          .set("access_token", access_token)
          .then((response2) => {
            const { body, status } = response2;
            expect(status).toBe(200);
            expect(body).toEqual(expect.arrayContaining([expect.objectContaining(createComment)]));
            done();
          });
      });
  });

  test("Should return 400 status & error message", function (done) {
    request(app)
      .get(`/comments/1}`)
      .then((response2) => {
        const { body, status } = response2;
        expect(status).toBe(400);
        expect(body).toHaveProperty("message", "You Should Login First");
        done();
      });
  });

  // test("Should return 200 status & an object containing the updated comment", function (done) {
  //   request(app)
  //     .get(`/comments`)
  //     .set("access_token", access_token)
  //     .then((response) => {
  //       request(app)
  //         .put(`/comments/${response.body[0].id}`)
  //         .set("access_token", access_token)
  //         .send({
  //           comment: "ganti comment",
  //           CrimeReportId: response.body[0].CrimeReportId,
  //         })
  //         .then((response2) => {
  //           const { body, status } = response2;
  //           expect(status).toBe(200);
  //           expect(body).toEqual(
  //             expect.objectContaining({
  //               comment: body.comment,
  //               CrimeReportId: body.CrimeReportId,
  //               UserId: body.UserId,
  //             })
  //           );
  //           done();
  //         });
  //     });
  // });

  // test("Should return 400 status & error message", function (done) {
  //   request(app)
  //     .put(`/comments/1`)
  //     .send({
  //       comment: "ganti comment",
  //       CrimeReportId: 1,
  //     })
  //     .then((response) => {
  //       const { body, status } = response;
  //       expect(status).toBe(400);
  //       expect(body).toHaveProperty("message", "You Should Login First");
  //       done();
  //     });
  // });

  // test("Should return 200 status & an object containing a success message", function (done) {
  //   request(app)
  //     .get(`/comments`)
  //     .set("access_token", access_token)
  //     .then((response) => {
  //       request(app)
  //         .delete(`/comments/${response.body[0].id}`)
  //         .set("access_token", access_token)
  //         .then((response2) => {
  //           const { body, status } = response2;
  //           expect(status).toBe(200);
  //           expect(body).toEqual(
  //             expect.objectContaining({
  //               message: "Successfully deleted the report",
  //             })
  //           );
  //           done();
  //         });
  //     });
  // });

  // test("Should return 400 status & error message", function (done) {
  //   request(app)
  //     .delete(`/comments/1`)
  //     .then((response) => {
  //       const { body, status } = response;
  //       expect(status).toBe(400);
  //       expect(body).toHaveProperty("message", "You Should Login First");
  //       done();
  //     });
  // });
});
