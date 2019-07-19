const controller = require("../controllers/homeTexts.controller");

const express = require("express")
const router = express.Router();

router.get("/:lang", controller.findhomeTexts);
router.post("/", controller.savehomeTexts);
router.put("/:id", controller.updatehomeTexts);
router.delete("/:id", controller.deletehomeTexts);

module.exports = router;
