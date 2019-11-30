const mongoose = require("mongoose");

let Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
const PostSchema = mongoose.Schema({
  _idUser: ObjectId,
  // client: [User.schema],
  scores: Number,
  marking: Number,
  description: String
});
module.exports = Table = mongoose.model("table", PostSchema);
