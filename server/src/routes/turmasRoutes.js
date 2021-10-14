const router = require("express").Router();

const authentication = require("../middlewares/authMiddleware");
const turmasControllers = require("../controllers/turmasControllers");

router.get("/", authentication(["aluno", "professor"]), turmasControllers.getTurmas);

module.exports = router;

