const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;
const ErrorResponse = require("../utils/errorResponse");
// Create and Save a new product
exports.create = (req, res, next) => {
  console.log("###create");
  let {
    productName,
    productPrice,
    productDescription,
    productImage,
    category,
    colour,
    brand,
    warrantyType,
  } = req.body;

  // Create a product
  const product = {
    productName: productName,
    productPrice: productPrice,
    productDescription: productDescription,
    productImage: productImage,
    category: category,
    colour: colour,
    brand: brand,
    warrantyType: warrantyType,
  };
  console.log(product);
  // Save product in the database
  Product.create(product)
    .then((data) => {
      // Make sure user is course owner
      if (req.user.role !== "User") {
        return next(
          new ErrorResponse(
            `User ${req.user.id} is not authorized to add product ${data.id}`,
            401
          )
        );
      }
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
  Product.findAll({
    attributes: ["id", "productName", "productPrice", "productImage"],
  })
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

// Find a single product with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find product with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving product with id=" + id,
      });
    });
};

// Update a product by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Product.update(req.body, {
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

  Product.destroy({
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
