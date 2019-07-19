const controller = require("../controllers/banner.controller");
const upload = require("../config/multer.config");

const express = require("express");
const router = express.Router();

router.post("/", controller.saveBanner);
router.delete("/:id", controller.deleteBanner);
router.get("/:id/fotos/", controller.sendPhoto);
router.put("/:id", controller.update);
router.post("/img", upload.array("img"), controller.uploadPhotos);

module.exports = router;