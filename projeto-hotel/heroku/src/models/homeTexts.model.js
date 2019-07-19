const mongoose = require("mongoose")

const homeTexts = new mongoose.Schema({
    lang: { type: String },
    welcome: { type: String },
    facilities: { type: String },
    location: { type: String },
    accommodations: { type: String }

})

module.exports = mongoose.model("homeTexts", homeTexts)