const router = require("express").Router();
const multer = require("multer");
const multerConfig = require("../config/multer");
const provaControllers = require("../controllers/provaControllers")


router.post("/", multer(multerConfig).single("avatar"), provaControllers.createProva);

router.get("/id", provaControllers.getProvaById);

router.delete("/id", provaControllers.deleteProva);

router.put("/id", provaControllers.editProva)

router.get("/", provaControllers.getAllProva)

module.exports = router;