const mongoose = require("mongooose")

const surroundings = new mongoose.Schema({
    lang: { type: String },
    title: { type: String },
    subtitle: { type: String },
    icon: { type: String }


})

module.exports = mongoose.model("surroundings", surroundings)