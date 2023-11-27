const router = require("express").Router();
const productosController = require("../controllers/producto.js");
router.get("/", productosController.allProducto);
module.exports = router;
