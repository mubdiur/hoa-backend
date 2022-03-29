// #id;
// #projectId;
// #coordinates;
// #portal;
// #fees;
// #paymentFrequency;
// #email;
// #phoneNumber;
// #cityCorporationId;
// #propertyCodes;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hoaSchema = new Schema({
    projectId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Project",
    },
    coordinates: {
        type: Map,
        of: String,
        required: true,
    },
    portal: {
        type: String,
    },
    fees: {
        type: Map,
        of: String,
    },
    paymentFrequency: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    cityCorporationId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "CityCorporation",
    },
    propertyCodes: {
        type: [Number],
    },
});

module.exports = hoaSchema;
