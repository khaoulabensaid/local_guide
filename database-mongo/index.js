var mongoose = require("mongoose");
var User = require('../server/resources/models/model');
mongoose.connect("mongodb://localhost/todo");
var db = mongoose.connection;

db.on("error", function () {
  console.log("mongoose connection error");
});

db.once("open", function () {
  console.log("mongoose connected successfully");
});
