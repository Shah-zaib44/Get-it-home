module.exports = (app) => {
  const coupons = require("../controllers/coupon.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", coupons.create);

  // Retrieve all product
  router.get("/", coupons.findAll);
  router.post("/validateCoupon", coupons.validateCoupon);
  // Update a Tutorial with id
  router.put("/:id", coupons.update);

  // Delete a Tutorial with id
  router.delete("/:id", coupons.delete);

  app.use("/api/coupons", router);
};
