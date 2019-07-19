const controller = require("../controllers/rooms.controller");
const upload = require("../config/multer.config");

const express = require("express");
const router = express.Router();

router.get("/", controller.findRooms);
router.get("/:lang", controller.findRoom);
router.delete("/:id", controller.deleteRoom);
router.post("/", controller.saveRooms);
router.put("/:id", controller.update);
router.post("/img", upload.array("img"), controller.uploadPhotos);
router.get("/:id/fotos/", controller.sendPhoto);

module.exports = router;
