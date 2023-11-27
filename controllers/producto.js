//const products = require("../models/products.js");

const productosController = {
  
  allProducto: (req, res) => {
    res.render("producto");
  },
};

module.exports = productosController;
