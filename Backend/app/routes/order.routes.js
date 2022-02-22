module.exports = (app) => {
  const orders = require("../controllers/order.controller.js");

  var router = require("express").Router();
  const { protect, authorize } = require("../middleware/auth.middleware");
  // Create a new Tutorial
  router.post("/", orders.addOrder);
  router.get("/", orders.getOrder);

  app.use("/api/orders", router);
};
