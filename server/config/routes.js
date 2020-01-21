
const tasksController = require("../controllers/tasks")

module.exports = function(app) {
    app.get("/tasks", tasksController.index)
    app.get("/tasks/:id", tasksController.taskById)
    app.post("/tasks", tasksController.create)
    app.put("/tasks/:id", tasksController.update)
    app.delete("/tasks/:id", tasksController.delete)
}

