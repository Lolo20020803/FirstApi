const {Router} = require('express');

const controller = require("../controller/controller");

const router = Router();

router.get("/getUsuario/:id",controller.getUsuarioById);

router.post("/postUsuario",controller.createUser);

module.exports = router;