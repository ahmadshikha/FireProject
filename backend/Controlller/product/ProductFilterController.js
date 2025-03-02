const Product = require('../../Model/ProductModel'); // Adjust the path accordingly

// Function to get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

// Function to get only Shoes
const getShoes = async (req, res) => {
  try {
    const shoes = await Product.find({ productType: "Shoes" });
    res.status(200).json(shoes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching shoes", error });
  }
};

// Function to get only Uniforms
const getUniforms = async (req, res) => {
  try {
    const uniforms = await Product.find({ productType: "Uniform" });
    res.status(200).json(uniforms);
  } catch (error) {
    res.status(500).json({ message: "Error fetching uniforms", error });
  }
};


const getEquipment = async (req, res) => {
    try {
      const Equipment = await Product.find({ productType: "Equipment" });
      res.status(200).json(Equipment);
    } catch (error) {
      res.status(500).json({ message: "Error fetching Equipment", error });
    }
  };

module.exports = {
  getAllProducts,
  getShoes,
  getUniforms,
  getEquipment
};