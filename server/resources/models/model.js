const mongoose = require("mongoose");
const GuideSchema = new mongoose.Schema({
  name: String,
  description: String,
  age: Number,
  gender: String,
  languages: [String],
  city: String,
  show: Boolean,
});
const Guide = mongoose.model("Guide", GuideSchema);
module.exports = Guide;
