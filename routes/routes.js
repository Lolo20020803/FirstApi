const {Router} = require('express');

const controller = require("../controller/controller");

const router = Router();

router.getUsuario("/getUsuario",controller.getUsuario);

router.postUsuario("/postUsuario",controller.postUsuario);

module.exports = router;