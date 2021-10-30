const express = require("express");
const products = require("./products.json");

module.exports = function getRoutes() {
  const router = express.Router();

  //we're extracting all the products from the product.json file
  router.get("/products", getProducts);

  router.get("/products/:productId", getProduct);

  return router;
};

const getProducts = (req, res) => {
  res.status(200).json({ products });
};

const getProduct = (req, res) => {
  const { productId } = req.params.productId;

  const product = products.find((product) => product.id === productId);

  if (!product) {

  }

  res.status(200).json({ product });
};

