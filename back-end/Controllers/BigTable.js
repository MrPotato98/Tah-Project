const ItemModel = require('./../Model/Item')
const Bigtable = require('./../Model/BigTable')
const Table={
    createBigtable:(_idUser,callback)=>{
        ItemModel.find({},(e,arr)=>{
            var arrItem=[]
            var index=0;
            arr.map(i=>{
                const item= new ItemModel({
                    _idBigtable:index,
                    title:i.title,
                    maxPoint:i.maxPoint,
                    point:i.point,
                    note:i.note,
                    type:i.type
                })
                arrItem.push(item)
                index=index+1;
            })
            const bigTable=new Bigtable({
                _idUser,
                delete:false,
                item:arrItem
            })
            bigTable.save()
             .then(res => callback(null, res))
            .catch(err => callback(err, null))
            
        })
        // console.log(arr)
        
    }
}
module.exports = Table;