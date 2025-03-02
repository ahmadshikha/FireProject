const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productType: {
      type: String,
      required: [true, "Product type is required."],
      enum: ["Equipment", "Shoes", "Uniform"],
      minlength: [2, "Product type must be at least 2 characters long."],
      maxlength: [100, "Product type cannot exceed 100 characters."],
    },
    productPrice: {
      type: Number,
      required: [true, "Product price is required."],
      default: 50,
      min: [1, "Product price must be at least 1."],
    },
    img: { type: String },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
