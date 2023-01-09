const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Dropping required as it causes error 
const petSchema = new Schema ({
    name: {type: String},
    type: {type: String},
    breed: {type: String},
    size: {type: String},
    gender: {type: String},
    age: {type: String},
    color: {type: String},
    coat: {type: String},
    organization: {type: String}
})