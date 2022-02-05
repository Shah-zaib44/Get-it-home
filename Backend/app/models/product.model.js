module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    productName: {
      type: Sequelize.STRING,
    },
    productPrice: {
      type: Sequelize.STRING,
    },
    productDescription: {
      type: Sequelize.STRING,
    },
    productImage: {
      type: Sequelize.JSON,
    },
    category: {
      type: Sequelize.STRING,
    },
    colour: {
      type: Sequelize.STRING,
    },
    brand: {
      type: Sequelize.STRING,
    },
    warrantyType: {
      type: Sequelize.STRING,
    },
  });

  return Product;
};
