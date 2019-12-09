const mongoose = require("mongoose");
let Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
const pr = require("./Project_partner");

const PostSchema = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  deleted: Boolean,
  key_repass: String,
  phonenumber: Number,
  Gender: Boolean,
  City: String,
  Country: String,
  Oganization: String,
});

module.exports = mongoose.model("User", PostSchema);
