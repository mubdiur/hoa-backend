const express = require("express");
const app = express();
const mongoose = require("mongoose");

const createApi = require("./api/create");
const readApi = require("./api/read");
const updateApi = require("./api/update");
const deleteApi = require("./api/delete");


const port = process.env.PORT || 3000;

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/test");
}
app.use(express.json());

app.use("/api/create", createApi);
app.use("/api/read", readApi);
app.use("/api/update", updateApi);
app.use("/api/delete", deleteApi);

app.get("/", (req, res) => {
    res.send("server online!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
