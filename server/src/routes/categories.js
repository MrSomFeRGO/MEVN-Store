const router = require("express").Router();
const { category } = require("../controllers");

router.route("/:id").get(category.get);
router.route("/").get(category.getAll);
router.route("/").post(category.create);
router.route("/:id").put(category.update);
router.route("/:id").delete(category.delete);

module.exports = router;
