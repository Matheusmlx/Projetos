const mongoose = require("mongoose")

const banner = new mongoose.Schema({
    title: { type: String },
    fotos: [{ type: String }],
})

module.exports = mongoose.model("banner", banner)