const mongoose = require("mongoose");
const URI =
    "mongodb+srv://dev2:XQGoNtf7KkQBvAkN@cluster0-rs14o.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(URI, {
    useNewUrlParser: true,
    autoReconnect: true,
    useCreateIndex: true
});
const db = mongoose.connection;

module.exports = db;

