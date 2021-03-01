const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
},
  isBand: Boolean,
  description: String,
  picture: {
    type: String,
    default: "https://res.cloudinary.com/gdaconcept/image/upload/v1614550771/workshop-artistify/no-image-logo_dcufai.png)",
}
});



const ArtistModel = mongoose.model("Artist", artistSchema);

module.exports = ArtistModel;

