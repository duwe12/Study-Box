const router = require("express").Router();
const multer = require("multer");
const multerConfig = require("../config/multer");
const materiaControllers = require("../controllers/materiaControllers")


router.post("/", multer(multerConfig).single("avatar"), materiaControllers.createMateria);

router.get("/id", materiaControllers.getMateriaById);

router.delete("/id", materiaControllers.deleteMateria);

router.put("/id", materiaControllers.editMateria)

router.get("/", materiaControllers.getAllMateria)

module.exports = router;