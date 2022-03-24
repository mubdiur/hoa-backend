// #id;
// #hoaId;
// #pmcName;
// #pmcWebsite;
// #pmcEmail;
// #pmcNumber;
// #ccnr; // Covenants, Conditions, and Restrictions
// #rulesandregulations;
// #otherdocument;

const hoaDetailSchema = new Schema({
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
