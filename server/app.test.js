const app = require("./app")

test("GET /", done => {
  supertest(app)
    .get("/")
    .expect(80, JSON.stringify({ name: "John Doe" }))
    .end(done)
})
