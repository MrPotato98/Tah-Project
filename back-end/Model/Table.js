const mongoose = require ('mongoose');
let Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const item= require('./Item');
const PostSchema= mongoose.Schema({

    _idBigtable:ObjectId,
    title:String,
    type:String,
    description:String,
    delete: Boolean,
    item:[item.schema]
})
module.exports = mongoose.model ('Table', PostSchema)