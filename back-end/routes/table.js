const express = require("express");
const router = express.Router();
const Table = require("./../Controllers/Table");
router.post("/", (req, res) => {
  const { idBigTable, title, type, description } = req.body;
//   console.log ( idBigTable, title, type, description );
  Table.createTable(idBigTable, title, type, description, (err, result) => {
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
