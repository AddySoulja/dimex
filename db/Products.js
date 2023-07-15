const mongoose = require("mongoose");

/**
 * id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      
 */

const productSchema = new mongoose.Schema(
  {
    id: { type: Number },
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    discountPercentage: { type: Number },
    rating: { type: Number },
    stock: { type: Number },
    brand: { type: String },
    category: { type: String },
    thumbnail: { type: String },
    images: { type: Array },
  },
  { collection: "Products" }
);

module.exports = mongoose.model("Products", productSchema);
