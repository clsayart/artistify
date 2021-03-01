// const mongoose = require('mongoose');
require("./../../config/mongo.js") ;
const styleModel = require("./../../model/style.model.js")

const styles = [
    { name: 'Hard-rock', color: "black", wikiURL: "https://en.wikipedia.org/wiki/Hard_rock" },
    { name: 'Classical', color: "green", wikiURL: "https://en.wikipedia.org/wiki/Classical_music" },
    { name: 'R&B', color: "red", maxSpeed: "https://en.wikipedia.org/wiki/Rhythm_and_blues" }
  ];

styleModel.insertMany(styles)
.then(insertstyles => console.log(insertstyles))
.catch(err => console.log(err))

// mongoose.connection.close()

