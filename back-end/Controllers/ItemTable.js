const ItemModel = require('./../Model/Item')
const bigTableModel = require('./../Model/BigTable')

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
    },

    updateItem: (type, point, note, callback) => {
        bigTableModel.findOne({
            '_idUser': '5de395164c205c4cb8522f5c'
        }, (err, res) => {
            console.log(err)
            ItemModel.findOneAndUpdate({
                '_idBigtable': res._idBigtable
            }, {$set: {'note': note, 'point': point, 'type': type}}, {upsert: true}, (err1, res1) => {
                console.log(res1)
            })
        })
    }
}
module.exports = ItemTable;