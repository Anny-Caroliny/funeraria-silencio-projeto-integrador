const express = require('express')
const HomeController = require("../controllers/HomeController");
const ContatoController = require('../../../../UC 4/eventos/src/controllers/ContatoController');

const router = express.Router();

router.get("/", HomeController.index);
//router.get("/sobre", SobreController.index);
//router.get("/planos", PlanosController.index);
//router.get("/servicos",ServicosController.index);
//router.get("/contato", ContatoController.index);
//router.get("/contato", ContatoController.send);

module.exports = router;