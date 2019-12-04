const TableModel = require('./../Model/Table')
const ItemModel = require('./../Model/Item')
const Table={
    createTable:(idBigTable,title,type, description,callback)=>{
        ItemModel.find({type}, (e,r)=>{
            var arr= [];
            if (e)
            {
                callback(err, null)
            }
            else{
                var index=0
                r.map(i=>{
                    const itemArr= new ItemModel({
                        _idInTable:index,
                        title:i.title,
                        maxPoint:i.maxPoint,
                        point:i.point,
                        note:i.note,
                        type:i.type
                    })
                    arr.push(itemArr)
                    index=index+1;
                })
                const item=new TableModel({
                    _idBigtable:idBigTable,
                    title:title,
                    type:type,
                    description:description,
                    delete: false,
                    item:arr
                })
                item.save()
                  .then(res => callback(null, res))
                  .catch(err => callback(err, null))

            }
            
            // console.log(r)
        })
        // console.log(arr)
        
    }
}
module.exports = Table;