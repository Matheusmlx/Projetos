/*eslint-env mocha */
import chai from "chai";
import app from "../src/index";
import chaiHttp from "chai-http";
import userSchema from "../src/schemas/user-schema";
import mongoose from "mongoose";

chai.use(chaiHttp);
chai.should();

let users;

before(async () => {
  users = [
    {
      name: "Pedro",
      email: "pedro@pedro.com",
      password: "123"
    },
    {
      name: "Virmerson",
      email: "virmerson@virmerson.com",
      password: "321"
    }
  ];

  await userSchema.create(users);
});

after(async () => {
  await mongoose.connection.db.dropCollection("users");
});

describe("Users", () => {
  describe("POST /users - save", () => {
    it("should save user", done => {
      let userToCreate = {
        name: "Lucas",
        email: "lucas@lucas.com",
        password: "333"
      };

      chai
        .request(app)
        .post("/users")
        .send(userToCreate)
        .end((err, res) => {
          if (err) done();
          chai.expect(res).to.have.status(500);
        });
      done();
    });
  });

  describe("GET / - all users", () => {
    it("should find all users", done => {
      chai
        .request(app)
        .get("/users")
        .end((err, res) => {
          if (err) done();
          chai.expect(res.data).to.have.property("size", 0);
        });
      done();
    });
  });
});
