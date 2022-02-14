module.exports = (app) => {
  const products = require("../controllers/product.controller.js");

  var router = require("express").Router();
  const { protect, authorize } = require("../middleware/auth.middleware");
  // Create a new Tutorial
  router.post("/", protect, authorize("User"), products.create);

  // Retrieve all product
  router.get("/", products.findAll);

  // Retrieve a single Tutorial with id
  router.get("productId/:id", products.findOne);
  router.get("/category", products.findByCategory);

  // Update a Tutorial with id
  router.put("/:id", products.update);

  // Delete a Tutorial with id
  router.delete("/:id", products.delete);

  app.use("/api/products", router);
};
