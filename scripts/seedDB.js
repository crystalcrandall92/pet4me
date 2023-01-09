const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/pets"
)

db.Pet
    .remove({})
    .then(() => db.Pet.collection.insertMany(petSeed))
    .then(data => {
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });