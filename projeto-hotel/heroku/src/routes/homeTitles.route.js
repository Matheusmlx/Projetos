const controller = require("../controllers/homeTitles.controller");

const express = require("express")
const router = express.Router();

router.get("/:lang", controller.findhomeTitle);
router.post("/", controller.savehomeTitles);
router.put("/:id", controller.updatehomeTitles);
router.delete("/:id", controller.deletehomeTitles);

module.exports = router;
