const db = require("../models");
const Order = db.orders;
const Op = db.Sequelize.Op;
const ErrorResponse = require("../utils/errorResponse");
// Create and Save a new product
exports.addOrder = async (req, res, next) => {
  console.log(req.body);

  const review = await Order.bulkCreate(req.body.cartData);

  res.status(201).json({
    success: true,
    data: review,
  });
};
exports.getOrder = async (req, res, next) => {
  const reviews = await Order.findAll({
    attributes: ["productName", "productPrice", "productImage", "quantity"],
  });

  return res.status(200).json({
    success: true,
    count: reviews.length,
    data: reviews,
  });
};
