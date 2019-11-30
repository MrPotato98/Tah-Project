const express = require("express");
const mongoose = require("mongoose");
// const config = require('config')
// const bodyparser = require("body-parser");
const app = express();

//db config
const db = require("./config/keys").mongoURI;
// app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//connect to mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB connected....!!!"))
  .catch(err => console.log(err));
 
//Use routes
app.use("/api/items", require("./routes/api/items"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/tables", require("./routes/api/table"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
