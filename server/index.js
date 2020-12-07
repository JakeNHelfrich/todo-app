const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const md5 = require("md5");

// MONGOOSE AND MODELS
const mongoDB = require("./db/index");
const todo = require("./models/todo");
const users = require("./models/users");

//MIDDLEWARE - app.js or index.js
const app = express();
app.use(bodyParser());
app.use(cors());
// app.use(express.static(path.join(__dirname, "../client/build/")));

// /route/[services]
// importing routes
app.get("/api/tasks", async (req, res) => {
  const queryData = await todo.find({}).exec();
  res.send({ data: queryData });
});

app.post("/api/tasks", (req, res) => {
  const { body } = req;
  try {
    const newObject = new todo(body);
    newObject.save((err) => {
      if (err) console.log(err);
    });
    res.send({ data: newObject });
  } catch (err) {
    // ERROR
    res.send(err);
  }
});

app.post("/api/tasks/remove", async (req, res) => {
  const { body } = req;
  await todo.deleteOne({ _id: body._id }, (err) => {
    if (err) console.log(err);
  });
  const items = await todo.find({}).exec();
  res.send({ data: items });
});

app.get("/api/tasks/clear", async (req, res) => {
  await todo.deleteMany({});
  res.send({ response: "all documents cleared" });
});

const port = process.env.PORT || 3032;
app.listen(port);
