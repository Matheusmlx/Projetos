const mongoose = require("mongoose")

const rooms = new mongoose.Schema({
    lang: { type: String },
    title: { type: String },
    description: { type: String },
    fotos: [{ type: String }],
    itens: [{ icon: { type: String }, title: { type: String } }]


})

module.exports = mongoose.model("rooms", rooms)