module.exports = (app) => {
  const reviews = require("../controllers/review.controller.js");

  var router = require("express").Router();
  const { protect, authorize } = require("../middleware/auth.middleware");
  // Create a new Tutorial
  router.post("/", reviews.addReview);

  app.use("/api/reviews", router);
};
