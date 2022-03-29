// #id;
// #hoaId;
// #propertyImage;
// #propertyAddress;
// #residentNames;
// #propertyCode;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    hoaId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Hoa",
    },
    propertyImage: {
        type: String,
    },
    propertyAddress: {
        type: String,
        required: true,
    },
    residentNames: {
        type: [String],
        required: true,
    },
    propertyCode: {
        type: String,
        required: true,
        unique: true,
    },
});

module.exports = propertySchema;
