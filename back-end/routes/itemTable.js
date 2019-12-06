const express = require('express');
const router = express.Router();
const ItemTable = require('./../Controllers/ItemTable')
router
.post('/', (req,res)=>{
    const {title,maxpoint,note, type} = req.body;
    console.log (title,maxpoint, type);
    ItemTable.createItem(title,maxpoint, type, (err, result)=>{
        if (err)
        {
            res.json ({message:false})
        }
        else{
            res.json({
                message:true,
                result
            })
        }
    })
})

.post('/update-item', (req, res) => {
    const {point, note, type} = req.body;
    ItemTable.updateItem(type, point, note, (err, result) => {
        console.log(err);
    })
})

module.exports=router;
