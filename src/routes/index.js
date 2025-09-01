const express = require('express')
const HomeController = require("../controllers/HomeController");
const PlanosController = require('../controllers/PlanosController');
const PlacasController = require('../controllers/PlacasController');
const CaixoesController = require('../controllers/CaixoesController');
const SobreController = require('../controllers/SobreController');
const ContatoController = require("../controllers/ContatoController.js");

const router = express.Router();

router.get("/", HomeController.index);
router.get("/planos", PlanosController.index);
router.get("/placas", PlacasController.index);
router.get("/caixoes", CaixoesController.index);
router.get("/sobrenos", SobreController.index);
router.get("/contato", ContatoController.index);
router.post("/contato", ContatoController.send);

module.exports = router;