  // #id;
  // #hoaId;
  // #plantingRestriction;
  // #trashRestrictions;
  // #parkingRestrictions;
  // #behavioralRestrictions;
  // #otherRestrictions;
  // #violationFee;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hoaRestrictionSchema = new Schema({
  _id: Schema.Types.ObjectId,
  hoaId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Hoa"
  },
  plantingRestriction: {
    type: Schema.Types.Array,
  },
  trashRestrictions: {
    type: Schema.Types.Array,
  },
  parkingRestrictions: {
    type: Schema.Types.Array,
  },
  behavioralRestrictions: {
    type: Schema.Types.Array,
  },
  otherRestrictions: {
    type: Schema.Types.Array,
  },
  violationFee: {
    type: Schema.Types.Array,
  }
});

module.exports = hoaRestrictionSchema;