const mongoose = require ('mongoose');
const PostSchema= mongoose.Schema({
    _idBigtable:Number,
    title:String,
    maxPoint:Number,
    point:Number,
    note:String,
    type:String
})
module.exports = mongoose.model ('Item', PostSchema)