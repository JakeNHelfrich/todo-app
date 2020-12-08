const express = require("express");
const router = express.Router();

//import controllers
const tasksController = require("../controllers/tasks");

router.get("/tasks", tasksController.getTasks);
router.post("/tasks", tasksController.addTask);
router.post("/tasks/remove", tasksController.removeTask);

module.exports = router;
