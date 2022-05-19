require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();

const firebaseAuthCheck = require("./firebaseAuthCheck");

const createApi = require("./api/create");
const readApi = require("./api/read");
const updateApi = require("./api/update");
const deleteApi = require("./api/delete");

const port = process.env.PORT || 3000;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/hoa-db");
}
// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static("public"));

app.use("/api/create", firebaseAuthCheck, createApi);
// app.use("/api/read", readApi);
// app.use("/api/update", updateApi);
// app.use("/api/delete", deleteApi);

app.get("/", (req, res) => {
  res.send("server online!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
