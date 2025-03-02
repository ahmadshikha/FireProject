
const Product = require('../../Model/ProductModel'); // Adjust the path as necessary









exports.test=(req,res)=>{
    console.log("the route test succefuly");
    
}


exports.createProduct = async (req, res) => {
  try {
    // Check if a file was uploaded
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    // Create a new product instance
    const product = new Product({
      productType: req.body.productType, // Assuming you are sending productType in the request body
      productPrice: req.body.productPrice, // Assuming you are sending productPrice in the request body
      img: req.file.path, // Save the path of the uploaded image
    });

    // Save the product to the database
    await product.save();

    // Respond with the created product
    res.status(201).json({
      message: 'Product created successfully!',
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};




exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


