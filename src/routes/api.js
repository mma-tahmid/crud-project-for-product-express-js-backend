const express = require("express");
const productController = require("../controllers/ProductsController")

const router = express.Router();




// C=Create
router.post("/create-product", productController.CreateProduct);


// R=Read
router.get("/read-product", productController.ReadProduct);
router.get("/read-product-byId/:id", productController.ReadProductByID);



// U=Update
router.post("/update-product/:id", productController.UpdateProduct);


// Delete
router.get("/delete-product/:id", productController.DeleteProduct);


module.exports = router;