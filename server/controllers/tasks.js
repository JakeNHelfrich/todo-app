const todo = require("../models/todo");

module.exports.getTasks = async (req, res) => {
  const queryData = await todo.find({}).exec();
  res.send({ data: queryData });
};
module.exports.addTask = async (req, res) => {
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
};

module.exports.removeTask = async (req, res) => {
  const { body } = req;
  await todo.deleteOne({ _id: body._id }, (err) => {
    if (err) console.log(err);
  });
  const items = await todo.find({}).exec();
  res.send({ data: items });
};

module.exports.toggleComplete = async (req, res) => {
  const { body } = req;
  const filter = { _id: body._id };
  await todo.findOneAndUpdate(filter, { isCompleted: !body.isCompleted });
  const items = await todo.find({}).exec();
  res.send({ data: items });
};
