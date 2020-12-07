const mongourl = "mongodb://localhost:27017";
const mongoClient = require("mongodb").MongoClient;

// MONGO CONNECT
// mongoClient.connect(mongourl, function (err, db) {
//   if (err) console.log(err);
//   console.log("connected!");
//   const dbo = db.db("Todo");
//   dbo.createCollection("TodoLists", () => {
//     if (err) console.log(err);
//     console.log("collectionc created");
//     db.close;
//   });
// });

const mongoose = require("mongoose");
mongoose.connect(mongourl, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log(`Connected to ${mongourl}`);
});

module.exports = db;
