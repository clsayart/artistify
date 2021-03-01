const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const styleSchema = new Schema({
  name : {
    type: String,
    required: true,
    unique: true
  },
  color : {
      type: String,
      default: '#000'
  },
  wikiURL : String
});

const styleModel = mongoose.model("Styles", styleSchema);

module.exports = styleModel;