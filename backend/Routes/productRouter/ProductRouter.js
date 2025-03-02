const express = require('express');
const router = express.Router();
const productController = require('../../Controlller/product/ProductController');
const multer = require('multer');
const path = require('path');
const app = express();

// app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/image/product'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});
const upload = multer({ storage });
router.use("/image", express.static(path.join(__dirname, '../../public/image')));
const savefile = upload.single('picture');
router.get('/',productController.getAllProducts)
router.get('/welcome', productController.test);
router.get('/:id', productController.getProductById); // Get product by ID
router.post('/', savefile, productController.createProduct); // Create product
router.put('/:id', savefile, productController.updateProduct); // Update product
router.delete('/:id', productController.deleteProduct); 


module.exports = router;