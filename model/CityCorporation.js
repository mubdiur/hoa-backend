/*
  #id;
  #division;
  #mayor;
  #website;
  #email;
  #phoneNumber;
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cityCorporationSchema = new Schema({
  division: {
    type: String,
    required: true,
  },
  mayor: {
    type: String,
    required: true,
  },
  website: String,
  email: String,
  phoneNumber: {
    type: String,
    required: true,
  },
});
const model = mongoose.model("CityCorporation", cityCorporationSchema);
module.exports = model;
