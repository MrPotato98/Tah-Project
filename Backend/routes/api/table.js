const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");

//Table Model
const Table = require("../../models/Table");

//@route GET api/Table
//@desc GET all Tables
//@access Public
router.get("/", (req, res) => {
  Table.find({ _idUser: ObjectID(req.param.id) })
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

//@route Post api/Table
//@desc Create A Table
//@access private
router.post("/a", (req, res) => {
  console.log(req.body);
});
router.post("/", (req, res) => {
  // const { scores, marking, description } = req.body;
  // // if (!scores || !marking || !description) {
  // //   return res.status(400).json({ msg: "Please enter all fields" });
  // // }
  // const newTable = new Table({
  //   scores,
  //   marking,
  //   description
  // });

  // newTable.save().then(table =>
  //   res.json({
  //     table: {
  //       scores: table.scores,
  //       marking: table.marking,
  //       description: table.description
  //     }
  //     })
  // );
  console.log(req.body.name);
    
});

//@route Delete api/Table/:id
//@desc Delete A Table
//@access Private
router.delete("/:id", auth, (req, res) => {
  Table.findById(req.params.id)
    .then(table => table.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});
module.exports = router;
