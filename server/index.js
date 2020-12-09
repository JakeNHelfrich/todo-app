const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

// MONGOOSE AND MODELS
const mongoDB = require("./db/index");
const todo = require("./models/todo");

//MIDDLEWARE - app.js or index.js
const app = express();
app.use(bodyParser());
app.use(cors());

// importing routes
const taskRoutes = require("./routes/tasks");
app.use("/api", taskRoutes);

const port = process.env.PORT || 3035;
app.listen(port);
