require("./../../config/mongo") ;
const artistModel = require("./../../model/Artist.model")
const artists = [
    { name: 'Madonna', isBand: false, description: "pop", picture:"default" },
    { name: 'Rihanna', isBand: false, description: "pop" ,picture:"default" },
    { name: 'U2', isBand: true, description: "rock", picture:"default" }
  ];
  artistModel.insertMany(artists)
  .then(insertArtist => console.log(insertArtist))
  .catch(err => console.log(err))
// mongoose.connection.close()
