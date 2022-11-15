const User = require("../controllers/user.controller");

module.exports = (app) => {
    app.get("/api/users", User.findAll)
    app.post("/api/users", User.create)
    app.get("/api/users/:id", User.findOne)
    app.put("/api/users/:id", User.update)
    app.delete("/api/users/:id", User.delete)
}
