var mongoose = require("mongoose");

var User = require('../server/resources/models/model');
mongoose.connect("mongodb://localhost/guide");
var db = mongoose.connection;

db.on("error", function () {
  console.log("mongoose connection error");
});

db.once("open", function () {
  console.log("mongoose connected successfully");
});
