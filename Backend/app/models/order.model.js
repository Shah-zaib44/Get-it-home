module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
    productName: {
      type: Sequelize.STRING,
    },
    productPrice: {
      type: Sequelize.INTEGER,
    },
    productImage: {
      type: Sequelize.JSON,
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
  });

  return Order;
};
