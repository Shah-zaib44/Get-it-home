module.exports = (sequelize, Sequelize) => {
  const Coupon = sequelize.define("coupon", {
    name: {
      type: Sequelize.STRING,
    },
    code: {
      type: Sequelize.STRING,
    },
    amount: {
      type: Sequelize.STRING,
    },
  });

  return Coupon;
};
