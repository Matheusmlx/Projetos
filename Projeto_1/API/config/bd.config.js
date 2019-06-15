const mongoose = require("mongoose");
const URI =
  "mongodb+srv://matheus:maxmw321123@livecoding-x3fc9.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(URI, { useNewUrlParser: true, autoReconnect: true });
const db = mongoose.connection;


module.exports = db;
