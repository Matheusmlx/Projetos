const mongoose = require("mongoose");

const footer = new mongoose.Schema({
    phone: { type: Number },
    textBook: { type: String },
    textSite: { type: String }


})

module.exports = mongoose.model("footer", footer)