const controller = require("../controllers/footer.controller");

const express = require("express")
const router = express.Router();

router.get("/:id", controller.findFooter);
router.post("/", controller.saveFooter);
router.put("/:id", controller.updateFooter);
router.delete("/:id", controller.deleteFooter);

module.exports = router;
