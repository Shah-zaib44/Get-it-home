const db = require("../models");
const Coupon = db.coupons;
const Op = db.Sequelize.Op;

// Create and Save a new product
exports.create = (req, res) => {
  let { name, code, amount } = req.body;

  // Create a product
  const coupon = {
    name: name,
    code: code,
    amount: amount,
  };
  console.log(coupon);
  // Save product in the database
  Coupon.create(coupon)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the product.",
      });
    });
};

// Retrieve all products from the database.
exports.findAll = (req, res) => {
  Coupon.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};

// Update a product by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Coupon.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "product was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update product with id=${id}. Maybe product was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating product with id=" + id,
      });
    });
};

// Delete a product with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Coupon.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "product was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete product with id=${id}. Maybe product was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete product with id=" + id,
      });
    });
};
