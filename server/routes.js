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
  const { productId } = req.params;

  const product = products.find((product) => product.id === productId);

  try{
    if (!product) {
      res.status(404).json({error});
    }
    res.status(200).json({ product });

  }catch(error){
    return res.status(404).json({statusCode:404, message:error.message});
  }
};

