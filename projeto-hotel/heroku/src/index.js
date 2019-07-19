import express from "express";
const app = express();
import bodyparser from "body-parser";
import cors from "cors";
import { } from "dotenv/config";


const db = require("./config/bd.config");
const bannerRouter = require("./routes/banner.route");
const footerRoute = require("./routes/footer.route");
const homeTitlesRoute = require("./routes/homeTitles.route");
const homeTextsRoute = require("./routes/homeTexts.route");
const roomsRoute = require("./routes/rooms.route")


db.on("open", () => {
  console.log("Conectado ao mongo! ");
});
db.on("error", err => {
  console.log(err);
});


app.use(bodyparser.json());
app.use(cors());



//CONFIGURANDO AS ROTAS
app.use("/banner", bannerRouter);
app.use("/footer", footerRoute);
app.use("/hometitles", homeTitlesRoute);
app.use("/hometexts", homeTextsRoute)
app.use("/rooms", roomsRoute)

app.get("/", (req, res) => {
  res.send("Pagina Inicial");
});



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});


