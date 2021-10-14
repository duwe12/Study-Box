const router = require("express").Router();
const multer = require("multer");
const multerConfig = require("../config/multer");
const notasControllers = require("../controllers/notasControllers")


router.post("/", multer(multerConfig).single("avatar"), notasControllers.createNotas);

router.get("/id", notasControllers.getNotasById);

router.delete("/id", notasControllers.deleteNotas);

router.put("/id", notasControllers.editNotas)

router.get("/", notasControllers.getAllNotas)

module.exports = router;