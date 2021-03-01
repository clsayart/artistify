require("./../../config/mongo");
const dataset = require("./labels.json");
const LabelsModel = require("./../../model/label.js");

LabelsModel.insertMany(dataset)
.then(dbSuccess => {
    console.log(dbSuccess);
})
.catch(dbError => {
    console.log(dbError);
});

// mongoose.connection.close();