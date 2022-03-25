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
  _id: Schema.Types.ObjectId,
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

module.exports = cityCorporationSchema;
