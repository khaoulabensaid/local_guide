const mongoose = require("mongoose");
const Guide = require("../models/model");
var selectAll = function (callback) {
  Guide.find({}, function (err, items) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};
var add = function (req, res) {
  Guide.create(
    { name: req.body.name, description: req.body.description },
    function (err, small) {
      console.log("2");
      if (err) console.log("error adding to the database");
      console.log("added successfully to the database");
      res.end();
    }
  );
};
var deleteAll = function () {
  Guide.deleteMany({}, function (err, succ) {
    if (err) console.log("error deleting all the items from the database");
    console.log("successfully deleted all the items from the database");
  });
};
var deleteOne = function (req, res) {
  Guide.deleteOne({ Todo: req.body.item }, function (err) {
    if (err) console.log("error deleting one item from the database ");
    console.log("successfully deleted one item from the database ");
    res.end();
  });
};
// var update = function (req, res) {
//   Item.updateOne({ Todo: req.body.old }, { $set: { Todo: req.body.new } }).then(
//     () => {
//       Item.find({}).then((data) => {
//         res.send(data);
//       });
//     }
//   );
// };

module.exports.deleteOne = deleteOne;
module.exports.deleteAll = deleteAll;
module.exports.add = add;
module.exports.selectAll = selectAll;
