const router = require("express").Router();
const carritoController = require("../controllers/carrito.js");
router.get("/", carritoController.carro);
module.exports = router;