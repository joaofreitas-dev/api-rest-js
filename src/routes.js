const carrosController = require("./controllers/carrosController");

const router = require("express").Router();

router.get("/carros", carrosController.listarCarros);
router.get("/carros/:id", carrosController.detalharCarro);
router.post("/carro", carrosController.cadastrarCarro);
router.put("/carro/:id", carrosController.atualizarCarro);
router.delete("/carro/:id", carrosController.excluirCarro);

module.exports = router;
