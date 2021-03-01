const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const labelsSchema = new Schema({
    name: String,
    city: String,
    country: String,
    street: String,
    streetNumber: Number,
    zipcode: String,
    logo: {
      type: String
    },
  });

const LabelsModel = mongoose.model("labels", labelsSchema);

module.exports = LabelsModel;