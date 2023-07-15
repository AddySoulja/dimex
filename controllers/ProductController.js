const Products = require("../db/Products");

module.exports.saveProduct = async (req, res) => {
  try {
    const { product } = req.body;
    const productSaved = await Products.create(product);
    res.status(200).json(productSaved);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports.getProducts = async (req, res) => {
  try {
    const productFetched = await Products.find({});
    res.status(200).json(productFetched);
  } catch (error) {
    res.status(500).json({ error });
  }
};
