const ItemModel = require('./../Model/Item')

const ItemTable={
    createItem:(title,maxpoint, type,callback)=>{
        const item=new ItemModel({
            title:title,
            maxPoint:maxpoint,
            point:0,
            note:"",
            type:type
        })
        item.save()
          .then(res => callback(null, res))
          .catch(err => callback(err, null))
    }
}
module.exports = ItemTable;