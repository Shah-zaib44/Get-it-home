const db = require("../models");
const Review = db.reviews;
const Op = db.Sequelize.Op;
const ErrorResponse = require("../utils/errorResponse");
// Create and Save a new product
exports.addReview = async (req, res, next) => {
  req.body.productId = req.params.productId;
  const review = await Review.create(req.body);

  res.status(201).json({
    success: true,
    data: review,
  });
};
