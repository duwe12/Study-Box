const router = require("express").Router();
const multer = require("multer");
const multerConfig = require("../config/multer");
const turmaControllers = require("../controllers/turmasControllers")


router.post("/", multer(multerConfig).single("avatar"), turmaControllers.createTurma);

router.get("/id", turmaControllers.getTurmaById);

router.delete("/id", turmaControllers.deleteTurma);

router.put("/id", turmaControllers.editTurma)

router.get("/", turmaControllers.getAllTurma)

module.exports = router;