const mongoose = require ('mongoose');
let Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const item = require('./Item');
const PostSchema = mongoose.Schema({
    _idUser:ObjectId,
    delete: Boolean,
    item:[item.schema]
})
module.exports = mongoose.model ('BigTable', PostSchema)