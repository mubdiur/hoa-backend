// #id;
// #hoaId;
// #amenityName;
// #address;
// #accessibility;
// #amenityRules;
// #amenityFees;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hoaAmnitySchema = new Schema({
  hoaId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Hoa"
  },
  amenityName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  accessibility: {
    type: Schema.Types.Array,
  },
  amenityRules: {
    type: Schema.Types.Array,
  },
  amenityFees: {
    type: Schema.Types.Array,
  }
});

module.exports = hoaAmnitySchema;
