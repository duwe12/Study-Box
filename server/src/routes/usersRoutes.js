const router = require("express").Router();

const authentication = require("../middlewares/authMiddleware");
const usersControllers = require("../controllers/usersControllers")


router.post("/", usersControllers.createUser);

router.get("/me", authentication(["aluno", "professor"]), usersControllers.getUser);

router.delete("/email", usersControllers.deleteUser);

router.put("/email", usersControllers.updateUser)

router.get("/", usersControllers.getAllUser)

module.exports = router;

