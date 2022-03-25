// #id;
// #name;
// #address;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  }
});

module.exports = projectSchema