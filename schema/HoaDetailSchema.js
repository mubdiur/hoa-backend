// #id;
// #hoaId;
// #pmcName;
// #pmcWebsite;
// #pmcEmail;
// #pmcNumber;
// #ccnr; // Covenants, Conditions, and Restrictions
// #rulesandregulations;
// #otherdocument;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hoaDetailSchema = new Schema({
  _id: Schema.Types.ObjectId,
  hoaId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Hoa"
  },
  pmcName: {
    type: String,
    required: true,
  },
  pmcWebsite: String,
  pmcEmail: String,
  pmcNumber: {
    type: String,
    required: true,
  },
  ccnr: {
    type: Schema.Types.Array,
  },
  rulesandregulations: {
    type: Schema.Types.Array,
  },
  otherdocument: {
    type: Schema.Types.Array,
  }
});

module.exports = hoaDetailSchema;