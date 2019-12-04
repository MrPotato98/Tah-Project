const express = require("express");
const router = express.Router();
const BigTable = require("./../Controllers/BigTable");
router.post("/", (req, res) => {
  const {_idUser} = req.body;
//   console.log ( idBigTable, title, type, description );
  BigTable.createBigtable(_idUser, (err, result) => {
    if (err) {
      res.json({ message: false });
    } else {
      res.json({
        message: true,
        result
      });
    }
  });
});

module.exports = router;
