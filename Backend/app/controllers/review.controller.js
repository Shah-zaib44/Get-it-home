const db = require("../models");
const Review = db.reviews;
const Op = db.Sequelize.Op;
const ErrorResponse = require("../utils/errorResponse");
// Create and Save a new product
exports.addReview = async (req, res, next) => {
  console.log(req.body);
  const review = await Review.create(req.body);

  res.status(201).json({
    success: true,
    data: review,
  });
};
exports.getReviews = async (req, res, next) => {
  if (req.params.id) {
    const reviews = await Review.findAll({
      where: { productId: req.params.id },
    });

    return res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  }
};
